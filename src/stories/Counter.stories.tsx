import { CountTwo } from "@/app/components/countTwo";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "storybook/test";


const meta: Meta<typeof CountTwo> = {
   title: 'Counter/CounterTwo',
   component: CountTwo,
   tags: ["autodocs"],
   argTypes: {
    label: { control: "text" },
    incrementBy: { 
        control: {type: "number", min: 1, step: 1},
    },
    onClick: {action: 'clicked'},
    backgroundColor: {control: 'color'},
   },
}

export default meta;

type Story = StoryObj<typeof CountTwo>;

export const Default: Story = {
    args: {
        label: "add me bby",
        incrementBy: 1
    }
}

export const Two: Story = {
    args: {
        label: "add me two",
        incrementBy: 3,
        backgroundColor: "hsla(0, 76%, 34%, 1)"
    }
}

export const IncrementByTwoTwice: Story = {
  args: {
    label: "add me two",
    incrementBy: 2,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", {
      name: "add me two",
    });

    await userEvent.click(button);

    await expect(canvas.getByText("2")).toBeInTheDocument();
  },
};