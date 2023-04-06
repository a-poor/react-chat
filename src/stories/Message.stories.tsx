import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from '../Message';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    width: { control: 'number' },
    fromSide: {
      control: "radio",
      options: ["left", "right", undefined],
    }
  },
} as ComponentMeta<typeof Message>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Hello, World!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Hello, World!\nThis is a second line...',
  maxw: 200,
  bgColor: '#efefef',
  textColor: '#0f0f0f',
  bottomLeftRadius: 3,
  bottomRightRadius: 15,
};

