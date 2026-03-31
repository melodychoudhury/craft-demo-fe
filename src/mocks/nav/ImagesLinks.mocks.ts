import { GetNavDocument } from "@/src/gql/graphql";


export const imagesLinksMocks = [
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
            id: "9",
            title: "Caravan Hook-ups",
            linkHandle: {
              __typename: "linkHandle_link_Entry",
              title: "Caravan Hook-ups",
              label: "Caravan Hook-ups",
              url: "/about",
            },
            children: [
              {
                __typename: "linkitem_Entry",
                id: "27",
                title: "Hook up connecter units",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "201",
                    title: "Collections image",
                    url: "/app/images/cv-port.jpg",
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
                id: "34",
                title: "Distributor settings",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "35",
                    title: "Collections image",
                    url: "/app/images/distribution-systems.jpg",
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
                id: "36",
                title: "Classic touring pedestalls",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "37",
                    title: "Classic touring pedestalls",
                    url: "/app/images/distribution-systems.jpg",
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
                id: "38",
                title: "Quantum touring pedestals",
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
                id: "39",
                title: "Mains & Distribution units",
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
                id: "40",
                title: "Random test",
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
                id: "41",
                title: "Random test 2",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "Connect",
                  url: "/Connect",
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