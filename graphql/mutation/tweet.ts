import { graphql } from "@/gql";

export const createTweetMuatation = graphql(`
  #graphql
  mutation Mutation($content: String, $imageUrl: String) {
    addTweet(content: $content, imageUrl: $imageUrl) {
      id
    }
  }
`);

export const likeUserTweetMutation = graphql(`
  #graphql
  mutation likeUserTweet($to: ID!) {
    likeUser(to: $to)
  }
`);

export const unlikeUserTweetMutation = graphql(`
  #graphql
  mutation unlikeUserTweet($to: ID!) {
    unLikeUser(to: $to)
  }
`);
