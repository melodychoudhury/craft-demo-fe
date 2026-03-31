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
            __typename: "linkitem_Entry",
            id: "1",
            title: "Home",
            linkHandle: {
              __typename: "linkHandle_link_Entry",
              title: "Home",
              label: "Home",
              url: "/",
            },
            children: [],
          },
          {
            __typename: "linkitem_Entry",
            id: "2",
            title: "EV Charging",
            linkHandle: {
              __typename: "linkHandle_link_Entry",
              title: "EV Charging",
              label: "EV Charging",
              url: "/ev-charging",
            },
            children: [
              {
                __typename: "linkitem_Entry",
                id: "21",
                title: "About",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [],
                children: [],
              },
              {
                __typename: "linkitem_Entry",
                id: "22",
                title: "Collections",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "Collections",
                  url: "/collections",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "201",
                    title: "Collections image",
                    url: "/app/images/img-1.jpg",
                    alt: "Collections image",
                    width: 300,
                    height: 200,
                    focalPoint: null,
                  },
                ],
                children: [],
              },
              {
                __typename: "linkitem_Entry",
                id: "23",
                title: "By Room",
                children: [
                  {
                    __typename: "linkitem_Entry",
                    id: "231",
                    title: "Living Room",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Living Room",
                      url: "/living-room",
                    },
                    children: [],
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "232",
                    title: "Bedroom",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Bedroom",
                      url: "/bedroom",
                    },
                    children: [],
                  },
                ],
              },
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
      <MockedProvider mocks={mocks}>
        <Story />
      </MockedProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TopNavClient>;

export const Default: Story = {};