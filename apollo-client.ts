import { abortableFetch } from "abortcontroller-polyfill/dist/cjs-ponyfill";
import fetch from "node-fetch";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL as string,
  fetch: abortableFetch(fetch).fetch,
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
