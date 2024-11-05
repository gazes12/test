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
const documents = {
    "query GetBasicOptions {\n  basicOptions {\n    logo {\n      src\n      title\n    }\n    contacts {\n      address\n      clear_tel\n      modify_tel\n    }\n  }\n}": types.GetBasicOptionsDocument,
    "query GetMetaPage($slug: String) {\n  metaPage(slug: $slug) {\n    title\n    description\n    keywords\n  }\n}": types.GetMetaPageDocument,
    "query GetPageOptions($slug: String) {\n  optionsPage(slug: $slug) {\n    slogan\n    backshow_slides {\n      alt\n      src\n      title\n    }\n  }\n}": types.GetPageOptionsDocument,
    "query GetServices {\n  services {\n    nodes {\n      id\n      title\n      content\n      price\n      gallery {\n        alt\n        src\n        title\n      }\n      chars {\n        icon\n        name\n        value\n      }\n      icons {\n        alt\n        src\n        title\n      }\n      variations {\n        description\n        name\n      }\n    }\n  }\n}": types.GetServicesDocument,
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
export function graphql(source: "query GetBasicOptions {\n  basicOptions {\n    logo {\n      src\n      title\n    }\n    contacts {\n      address\n      clear_tel\n      modify_tel\n    }\n  }\n}"): (typeof documents)["query GetBasicOptions {\n  basicOptions {\n    logo {\n      src\n      title\n    }\n    contacts {\n      address\n      clear_tel\n      modify_tel\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMetaPage($slug: String) {\n  metaPage(slug: $slug) {\n    title\n    description\n    keywords\n  }\n}"): (typeof documents)["query GetMetaPage($slug: String) {\n  metaPage(slug: $slug) {\n    title\n    description\n    keywords\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPageOptions($slug: String) {\n  optionsPage(slug: $slug) {\n    slogan\n    backshow_slides {\n      alt\n      src\n      title\n    }\n  }\n}"): (typeof documents)["query GetPageOptions($slug: String) {\n  optionsPage(slug: $slug) {\n    slogan\n    backshow_slides {\n      alt\n      src\n      title\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetServices {\n  services {\n    nodes {\n      id\n      title\n      content\n      price\n      gallery {\n        alt\n        src\n        title\n      }\n      chars {\n        icon\n        name\n        value\n      }\n      icons {\n        alt\n        src\n        title\n      }\n      variations {\n        description\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetServices {\n  services {\n    nodes {\n      id\n      title\n      content\n      price\n      gallery {\n        alt\n        src\n        title\n      }\n      chars {\n        icon\n        name\n        value\n      }\n      icons {\n        alt\n        src\n        title\n      }\n      variations {\n        description\n        name\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;