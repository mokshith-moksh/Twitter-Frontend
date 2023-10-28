import { graphql } from "@/gql";

export const createTweetMuatation = graphql(`
  #graphql
  mutation Mutation($content: String, $imageUrl: String) {
    addTweet(content: $content, imageUrl: $imageUrl) {
      id
    }
  }
`);
