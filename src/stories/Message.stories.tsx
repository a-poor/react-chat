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
const Template: ComponentStory<typeof Message> = (args) => (
  <div style={{display: 'flex'}}>
    <Message {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Hello, World!',
  w: 300,
  h: "fit",
  bgColor: 'rgb(84, 168, 255)',
  textColor: 'white',
  p: "5px 10px",
  m: "5px",
  radius: "15px",
  fromSide: "left",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Hello, World!',
};

