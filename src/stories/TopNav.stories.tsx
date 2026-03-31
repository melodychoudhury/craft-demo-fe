import type { Meta, StoryObj } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing/react";
import TopNavClient from "@/app/components/navigation/TopNavClient";
import { defaultMocks } from "../mocks/nav/default.mocks";
import { singleLinkMocks } from "../mocks/nav/singleLink.mocks";
import { HeadingLinkMocks } from "../mocks/nav/HeadingLink.mocks";
import { imagesLinksMocks } from "../mocks/nav/ImagesLinks.mocks";
import { ImagesOnlyMocks } from "../mocks/nav/ImagesOnly.mocks";



const meta = {
  title: "Navigation/TopNavClient",
  component: TopNavClient,
  tags: ['autodocs'],
  argTypes: {
    debugKeepOpen: {
      name: "keep menu open",
      control: { type: "boolean" },
    },
    defaultOpenItem: {
      name: "Developer note: edit ID, this is the active id on the nav, whatever nav item has it will appear on the nav when they are matched",
      control: { type: "text" },
    },
  },
  decorators: [
    (Story, context) => (
      <MockedProvider mocks={context.parameters.mocks ? context.parameters.mocks : defaultMocks}>
        <Story />
      </MockedProvider>
    ),
  ],
} satisfies Meta<typeof TopNavClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    mocks: defaultMocks,
  },
  args: {
    debugKeepOpen: false,
    defaultOpenItem: "1",
  },
};

export const Singlelink: Story = {
  parameters: {
    mocks: singleLinkMocks,
  },
  args: {
    debugKeepOpen: true,
    defaultOpenItem: "1",
  },
};

export const HeadingLink: Story = {
  parameters: {
    mocks: HeadingLinkMocks,
  },
  args: {
    debugKeepOpen: true,
    defaultOpenItem: "1",
  },
};

export const ImagesLinks: Story = {
  parameters: {
    mocks: imagesLinksMocks,
  },
  args: {
    debugKeepOpen: true,
    defaultOpenItem: "1",
  },
};

export const ImagesOnly: Story = {
  parameters: {
    mocks: ImagesOnlyMocks,
    docs: {
      description: {
        story: "This story the nav with images only.",
      },
    },
  },
  args: {
    debugKeepOpen: true,
    defaultOpenItem: "1",
  },
};

