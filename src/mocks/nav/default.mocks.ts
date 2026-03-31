import { GetNavDocument } from "@/src/gql/graphql";


export const defaultMocks = [
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