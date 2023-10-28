import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_URL as string, 
  {
    headers: () => ({
      authorization: isClient
        ? `Bearer ${window.localStorage.getItem("__Twitter_token")}`
        : "undefined",
    }),
  }
);
