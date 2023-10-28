import { graphql } from "@/gql";

export const followUserMuatation = graphql(`
  #graphql
  mutation FollowUser($to: ID!) {
  followUser(to: $to)
}
`);

export const UnfollowUserMuatation = graphql(`
  #graphql
  mutation UnFollowUser($to: ID!) {
    unfollowUser(to: $to)
  }
`);

