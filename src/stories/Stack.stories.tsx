import type { Meta, StoryObj } from "@storybook/react";
import Stack from "@/app/components/Stack";
import type { ComponentProps } from "react";

// defines all props of the component
type StoryProps = ComponentProps<typeof Stack> & {
    numberOfChildren: number;
};

const meta: Meta<StoryProps> = {
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    numberOfChildren: {
        options: [1, 5, 10],
        control: {
            type: 'select'
        }
    },
    orientation: {
        options: ['horizontal' , 'vertical'],
        control: {
            type: 'select'
        }
    },
    args: {
        numberOfChildren: 5
    }
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ numberOfChildren, ...args}) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  }
};

export const vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ numberOfChildren, ...args}) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  }
};

function createChildren(numberOfChildren: number) {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          style={{ width: 100, height: 100, backgroundColor: 'red' }}
        />
      );
    });
}