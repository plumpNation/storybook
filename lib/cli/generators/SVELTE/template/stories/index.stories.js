import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.svelte';
import Welcome from './Welcome.svelte';

storiesOf('Welcome', module).add('to Storybook', () => ({
  Component: Welcome,
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module).add('with text', () => ({
  Components: MyButton,
  methods: { onClick: action('clicked') },
}));
