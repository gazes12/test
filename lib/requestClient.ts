import { GraphQLClient } from 'graphql-request';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const client = new GraphQLClient(apiUrl, { fetch });