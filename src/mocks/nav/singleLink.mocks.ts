import { GetNavDocument } from "@/src/gql/graphql";


export const singleLinkMocks = [
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
            title: "Rolec",
            linkHandle: {
              __typename: "linkHandle_link_Entry",
              title: "Rolec",
              label: "Rolec",
              url: "/about",
            },
            children: [
              {
                __typename: "linkitem_Entry",
                id: "2",
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
                id: "3",
                title: "News & Blogs",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "News & Blogs",
                  url: "/news-and-blogs",
                },
                image: [],
                children: [],
              },
              {
                __typename: "linkitem_Entry",
                id: "4",
                title: "Downloads",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "News & Blogs",
                  url: "/news-and-blogs",
                },
                image: [],
                children: []
              },
              {
                __typename: "linkitem_Entry",
                id: "5",
                title: "Support",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "Support",
                  url: "/support",
                },
                image: [],
                children: []
              },
              {
                __typename: "linkitem_Entry",
                id: "6",
                title: "Connect",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "Connect",
                  url: "/Connect",
                },
                image: [],
                children: []
              },
              {
                __typename: "linkitem_Entry",
                id: "7",
                title: "Contact",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "Contact",
                  url: "/Contact",
                },
                image: [],
                children: []
              },
            ],
          },
        ],
      },
    }
   }
];