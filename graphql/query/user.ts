import { graphql, FragmentType, useFragment } from "../../gql";
import { CORE_USER_FIELDS } from "./userFragments";

export const verifyGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  ${CORE_USER_FIELDS}
  query GetCurrentUser {
    getCurrentUser {
      ...UserFields
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  ${CORE_USER_FIELDS}
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      ...UserFields
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
