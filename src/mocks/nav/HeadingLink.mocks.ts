import { GetNavDocument } from "@/src/gql/graphql";


export const HeadingLinkMocks = [
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
            id: "8",
            title: "EV Charging",
            linkHandle: {
              __typename: "linkHandle_link_Entry",
              title: "EV Charging",
              label: "EV Charging",
              url: "/about",
            },
            children: [
              {
                __typename: "linkitem_Entry",
                id: "11",
                title: "Subtitle A",
                image: [],
                children: [
                  {
                    __typename: "linkitem_Entry",
                    id: "12",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "13",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "14",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                ],
              },
              {
                __typename: "linkitem_Entry",
                id: "15",
                title: "Subtitle B",
                image: [],
                children: [
                  {
                    __typename: "linkitem_Entry",
                    id: "16",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "17",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "18",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                ],
              },
              {
                __typename: "linkitem_Entry",
                id: "19",
                title: "Subtitle C",
                image: [],
                children: [
                  {
                    __typename: "linkitem_Entry",
                    id: "20",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "21",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "22",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                ],
              },
              {
                __typename: "linkitem_Entry",
                id: "23",
                title: "Subtitle D",
                image: [],
                children: [
                  {
                    __typename: "linkitem_Entry",
                    id: "24",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "25",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                  {
                    __typename: "linkitem_Entry",
                    id: "26",
                    title: "Evo",
                    linkHandle: {
                      __typename: "linkHandle_link_Entry",
                      title: "Evo",
                      label: "Evo",
                      url: "/Evo",
                    },
                  },
                ],
              },
            ]
          },
        ],
      },
    }
   }
];