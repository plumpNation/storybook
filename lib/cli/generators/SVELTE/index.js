import mergeDirs from 'merge-dirs';
import path from 'path';
import {
  getVersions,
  getPackageJson,
  writePackageJson,
  getBabelRc,
  writeBabelRc,
} from '../../lib/helpers';

export default async npmOptions => {
  const [
    storybookVersion,
    actionsVersion,
    linksVersion,
    addonsVersion,
    babelCoreVersion,
  ] = await getVersions(
    npmOptions,
    '@storybook/svelte',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addons',
    'babel-core'
  );

  mergeDirs(path.resolve(__dirname, 'template'), '.', 'overwrite');

  const packageJson = getPackageJson();

  packageJson.dependencies = packageJson.dependencies || {};
  packageJson.devDependencies = packageJson.devDependencies || {};
  packageJson.devDependencies['@storybook/svelte'] = storybookVersion;
  packageJson.devDependencies['@storybook/addon-actions'] = actionsVersion;
  packageJson.devDependencies['@storybook/addon-links'] = linksVersion;
  packageJson.devDependencies['@storybook/addons'] = addonsVersion;

  if (!packageJson.dependencies['babel-core'] && !packageJson.devDependencies['babel-core']) {
    packageJson.devDependencies['babel-core'] = babelCoreVersion;
  }

  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.storybook = 'start-storybook -p 6006';
  packageJson.scripts['build-storybook'] = 'build-storybook';

  writePackageJson(packageJson);

  const babelRc = getBabelRc() || {
    presets: [['env', { modules: false }]],
  };

  writeBabelRc(babelRc);
};
