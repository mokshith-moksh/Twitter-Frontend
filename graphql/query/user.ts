import { graphql } from "../../gql";

export const verifyGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImageUrl
      email
      firstName
      lastName
      recommendedUsers {
        id
        firstName
        lastName
        profileImageUrl
      }
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
      likedTweets{
        id
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
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
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
    }
  }
`);

export const getAllUserQuery = graphql(`
  #graphql
  query GetAllUser {
  getAllUser {
    firstName
    id
    profileImageUrl
  }
}
`);

export const getSearchUserQuery = graphql(`
  #graphql
  query GetSearchUser($searchQuery: String!) {
  getSearchUser(searchQuery: $searchQuery) {
    id
    firstName
    lastName
    profileImageUrl
  }
}
`);