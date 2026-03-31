import { GetNavDocument } from "@/src/gql/graphql";


export const ImagesOnlyMocks = [
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
            id: "33",
            title: "Marina services",
            linkHandle: {
              __typename: "linkHandle_link_Entry",
              title: "Marina services",
              label: "Marina services",
              url: "/about",
            },
            children: [
              {
                __typename: "linkitem_Entry",
                id: "40",
                title: "EV charging",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "401",
                    title: "Collections image",
                     url: "/app/images/service-peds.jpg",
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
                id: "41",
                title: "Superyacht Services",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "402",
                    title: "Collections image",
                    url: "/app/images/service-peds.jpg",
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
                id: "42",
                title: "Marina illumination",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "403",
                    title: "Emergency services",
                    url: "/app/images/service-peds.jpg",
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
                id: "43",
                title: "Emergency services",
                linkHandle: {
                  __typename: "linkHandle_link_Entry",
                  title: "About",
                  url: "/about",
                },
                image: [
                  {
                    __typename: "Asset",
                    id: "404",
                    title: "Collections image",
                    url: "/app/images/service-peds.jpg",
                    alt: "Collections image",
                    width: 300,
                    height: 200,
                    focalPoint: null,
                  },
                ],
                children: [],
              },
            ]
          }
        ],
      },
    }
   }
];