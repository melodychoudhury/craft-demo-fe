import type { Meta, StoryObj } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing/react";
import TopNavClient from "@/app/components/navigation/TopNavClient";
import { GetNavDocument } from "@/src/gql/graphql";

const mocks = [
  {
    request: {
      query: GetNavDocument,
      variables: { section: ["topNav"] },
    },
    result: {
      data: {
        entries: [
          {
            id: "1",
            title: "Home",
            linkHandle: {
              title: "Home",
              label: "Home",
              url: "/",
            },
            children: [],
          },
          {
            id: "2",
            title: "Shop",
            linkHandle: {
              title: "Shop",
              label: "Shop",
              url: "/",
            },
            children: [
              {
                id: "21",
                title: "Design",
                linkHandle: {
                  title: "Design",
                  label: "Design",
                  url: "/design",
                },
                image: [],
                children: [],
              },
              {
                id: "22",
                title: "Collections",
                linkHandle: {
                  title: "Collections",
                  label: "Collections",
                  url: "/collections",
                },
                image: [
                  {
                    id: "201",
                    title: "Collections image",
                    url: "/storybook/collections.jpg",
                    alt: "Collections image",
                    width: 300,
                    focalPoint: null,
                  },
                ],
                children: [],
              },
              {
                id: "23",
                title: "By Room",
                image: [],
                children: [
                  {
                    id: "231",
                    title: "Living Room",
                    linkHandle: {
                      title: "Living Room",
                      label: "Living Room",
                      url: "/living-room",
                    },
                    image: [],
                    children: [],
                  },
                  {
                    id: "232",
                    title: "Bedroom",
                    linkHandle: {
                      title: "Bedroom",
                      label: "Bedroom",
                      url: "/bedroom",
                    },
                    image: [],
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: "3",
            title: "About",
            linkHandle: {
              title: "About",
              label: "About",
              url: "/about",
            },
            children: [
                {
                    id: "231",
                    title: "Living Room",
                    linkHandle: {
                      title: "Living Room",
                      label: "Living Room",
                      url: "/living-room",
                    },
                    image: [],
                    children: [],
                  }
            ],
          },
        ],
      },
    },
  },
];

const meta: Meta<typeof TopNavClient> = {
  title: "Navigation/TopNavClient",
  component: TopNavClient,
  decorators: [
    (Story) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        <Story />
      </MockedProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TopNavClient>;

export const Default: Story = {};