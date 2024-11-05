import { GraphQLClient } from 'graphql-request'
export const client = new GraphQLClient("http://test-app/wordpress/graphql", { fetch });