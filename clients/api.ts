import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:8000/graphql", 
  {
    headers: () => ({
      authorization: isClient
        ? `Bearer ${window.localStorage.getItem("__Twitter_token")}`
        : "undefined",
    }),
  }
);
