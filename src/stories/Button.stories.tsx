import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/app/components/Buttons";
import { fn } from "storybook/test";
import type { ComponentProps } from "react";

// defines all props of the component
type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: "select"
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: "select"
      },
    }
  },
  args: {
    onClick: fn(),
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    buttonText: "hello world"
  },
  render: ({buttonText, ...args}) => { return <Button {...args}>{buttonText}</Button>},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    buttonText: "hello world"
  },
  render: ({buttonText, ...args}) => { return <Button {...args}>{buttonText}</Button>},
};