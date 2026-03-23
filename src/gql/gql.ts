/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment heroBlock on hero_Entry {\n  __typename\n  id\n  title\n  typeHandle\n  body\n}": typeof types.HeroBlockFragmentDoc,
    "fragment ImageBlock on imageblock_Entry {\n  __typename\n  id\n  typeHandle\n  toggle\n  toggle2\n  image {\n    url\n    focalPoint\n    alt\n    width\n    height\n  }\n  imageSlider {\n    __typename\n    ... on image_Entry {\n      id\n      title\n      typeHandle\n      body\n      body2\n      linkHandle {\n        label\n        url\n      }\n      linkHandle2 {\n        label\n        url\n      }\n      image {\n        url\n        focalPoint\n        alt\n        width\n        height\n      }\n    }\n  }\n}": typeof types.ImageBlockFragmentDoc,
    "query GetBlogs {\n  entries(section: \"blog\") {\n    id\n    title\n    slug\n    ... on blogentry_Entry {\n      body\n    }\n  }\n}": typeof types.GetBlogsDocument,
    "query GetHome($slug: [String]) {\n  entry(section: \"home\", slug: $slug) {\n    id\n    title\n    ... on homeentry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}": typeof types.GetHomeDocument,
    "query GetNav {\n  entries(section: \"topNav\", level: 1) {\n    id\n    title\n    ... on linkitem_Entry {\n      linkHandle {\n        title\n        label\n        url\n      }\n    }\n    children {\n      id\n      title\n      ... on linkitem_Entry {\n        image {\n          url\n          focalPoint\n          alt\n          width\n          id\n          title\n          height\n        }\n        linkHandle {\n          title\n          url\n        }\n      }\n      children {\n        id\n        title\n        ... on linkitem_Entry {\n          linkHandle {\n            title\n            url\n          }\n        }\n        children {\n          id\n          title\n          ... on linkitem_Entry {\n            linkHandle {\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetNavDocument,
    "query GetPage($uri: [String]) {\n  entry(section: \"pages\", uri: $uri) {\n    id\n    title\n    uri\n    ... on pagesEntry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}": typeof types.GetPageDocument,
};
const documents: Documents = {
    "fragment heroBlock on hero_Entry {\n  __typename\n  id\n  title\n  typeHandle\n  body\n}": types.HeroBlockFragmentDoc,
    "fragment ImageBlock on imageblock_Entry {\n  __typename\n  id\n  typeHandle\n  toggle\n  toggle2\n  image {\n    url\n    focalPoint\n    alt\n    width\n    height\n  }\n  imageSlider {\n    __typename\n    ... on image_Entry {\n      id\n      title\n      typeHandle\n      body\n      body2\n      linkHandle {\n        label\n        url\n      }\n      linkHandle2 {\n        label\n        url\n      }\n      image {\n        url\n        focalPoint\n        alt\n        width\n        height\n      }\n    }\n  }\n}": types.ImageBlockFragmentDoc,
    "query GetBlogs {\n  entries(section: \"blog\") {\n    id\n    title\n    slug\n    ... on blogentry_Entry {\n      body\n    }\n  }\n}": types.GetBlogsDocument,
    "query GetHome($slug: [String]) {\n  entry(section: \"home\", slug: $slug) {\n    id\n    title\n    ... on homeentry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}": types.GetHomeDocument,
    "query GetNav {\n  entries(section: \"topNav\", level: 1) {\n    id\n    title\n    ... on linkitem_Entry {\n      linkHandle {\n        title\n        label\n        url\n      }\n    }\n    children {\n      id\n      title\n      ... on linkitem_Entry {\n        image {\n          url\n          focalPoint\n          alt\n          width\n          id\n          title\n          height\n        }\n        linkHandle {\n          title\n          url\n        }\n      }\n      children {\n        id\n        title\n        ... on linkitem_Entry {\n          linkHandle {\n            title\n            url\n          }\n        }\n        children {\n          id\n          title\n          ... on linkitem_Entry {\n            linkHandle {\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetNavDocument,
    "query GetPage($uri: [String]) {\n  entry(section: \"pages\", uri: $uri) {\n    id\n    title\n    uri\n    ... on pagesEntry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}": types.GetPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment heroBlock on hero_Entry {\n  __typename\n  id\n  title\n  typeHandle\n  body\n}"): (typeof documents)["fragment heroBlock on hero_Entry {\n  __typename\n  id\n  title\n  typeHandle\n  body\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ImageBlock on imageblock_Entry {\n  __typename\n  id\n  typeHandle\n  toggle\n  toggle2\n  image {\n    url\n    focalPoint\n    alt\n    width\n    height\n  }\n  imageSlider {\n    __typename\n    ... on image_Entry {\n      id\n      title\n      typeHandle\n      body\n      body2\n      linkHandle {\n        label\n        url\n      }\n      linkHandle2 {\n        label\n        url\n      }\n      image {\n        url\n        focalPoint\n        alt\n        width\n        height\n      }\n    }\n  }\n}"): (typeof documents)["fragment ImageBlock on imageblock_Entry {\n  __typename\n  id\n  typeHandle\n  toggle\n  toggle2\n  image {\n    url\n    focalPoint\n    alt\n    width\n    height\n  }\n  imageSlider {\n    __typename\n    ... on image_Entry {\n      id\n      title\n      typeHandle\n      body\n      body2\n      linkHandle {\n        label\n        url\n      }\n      linkHandle2 {\n        label\n        url\n      }\n      image {\n        url\n        focalPoint\n        alt\n        width\n        height\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetBlogs {\n  entries(section: \"blog\") {\n    id\n    title\n    slug\n    ... on blogentry_Entry {\n      body\n    }\n  }\n}"): (typeof documents)["query GetBlogs {\n  entries(section: \"blog\") {\n    id\n    title\n    slug\n    ... on blogentry_Entry {\n      body\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHome($slug: [String]) {\n  entry(section: \"home\", slug: $slug) {\n    id\n    title\n    ... on homeentry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}"): (typeof documents)["query GetHome($slug: [String]) {\n  entry(section: \"home\", slug: $slug) {\n    id\n    title\n    ... on homeentry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetNav {\n  entries(section: \"topNav\", level: 1) {\n    id\n    title\n    ... on linkitem_Entry {\n      linkHandle {\n        title\n        label\n        url\n      }\n    }\n    children {\n      id\n      title\n      ... on linkitem_Entry {\n        image {\n          url\n          focalPoint\n          alt\n          width\n          id\n          title\n          height\n        }\n        linkHandle {\n          title\n          url\n        }\n      }\n      children {\n        id\n        title\n        ... on linkitem_Entry {\n          linkHandle {\n            title\n            url\n          }\n        }\n        children {\n          id\n          title\n          ... on linkitem_Entry {\n            linkHandle {\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetNav {\n  entries(section: \"topNav\", level: 1) {\n    id\n    title\n    ... on linkitem_Entry {\n      linkHandle {\n        title\n        label\n        url\n      }\n    }\n    children {\n      id\n      title\n      ... on linkitem_Entry {\n        image {\n          url\n          focalPoint\n          alt\n          width\n          id\n          title\n          height\n        }\n        linkHandle {\n          title\n          url\n        }\n      }\n      children {\n        id\n        title\n        ... on linkitem_Entry {\n          linkHandle {\n            title\n            url\n          }\n        }\n        children {\n          id\n          title\n          ... on linkitem_Entry {\n            linkHandle {\n              title\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPage($uri: [String]) {\n  entry(section: \"pages\", uri: $uri) {\n    id\n    title\n    uri\n    ... on pagesEntry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}"): (typeof documents)["query GetPage($uri: [String]) {\n  entry(section: \"pages\", uri: $uri) {\n    id\n    title\n    uri\n    ... on pagesEntry_Entry {\n      body\n      pagebuilder {\n        ...heroBlock\n        ...ImageBlock\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;