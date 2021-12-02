import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {
  label: 'button-default',
  type: 'default',
  size: 'normal',
  onClick(e) {
    console.log([e]);
  },
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: 'button-small',
  size: 'small',
};

export const DisabledButton = Template.bind({});
SmallButton.args = {
  label: 'button-disabled',
  size: 'large',
  disabled: true,
};
