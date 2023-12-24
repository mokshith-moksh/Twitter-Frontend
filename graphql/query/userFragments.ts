import { graphql } from "../../gql";

export const CORE_USER_FIELDS = graphql(`
  fragment UserFields on User {
    id
    email
    firstName
    lastName
    profileImageUrl
    followers {
      id
      firstName
      lastName
      profileImageUrl
    }
    following {
      id
      firstName
      lastName
      profileImageUrl
    }
    tweets {
      content
      id
      imageUrl
      auther {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
    recommendedUsers {
      id
      firstName
      lastName
      profileImageUrl
    }
  }
`);
