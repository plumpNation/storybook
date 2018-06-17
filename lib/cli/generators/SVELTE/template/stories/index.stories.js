import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button.svelte';
import Welcome from './Welcome.svelte';

storiesOf('Welcome', module).add('to Storybook', () => ({
  Component: Welcome,
  methods: { onClick: linkTo('Button') },
}));

storiesOf('Button', module).add('with text', () => ({
  Components: Button,
  methods: { onClick: action('clicked') },
}));
