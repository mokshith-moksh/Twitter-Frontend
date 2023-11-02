/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #graphql\n  mutation Mutation($content: String, $imageUrl: String) {\n    addTweet(content: $content, imageUrl: $imageUrl) {\n      id\n    }\n  }\n": types.MutationDocument,
    "\n  #graphql\n  mutation likeUserTweet($to: ID!) {\n    likeUser(to: $to)\n  }\n": types.LikeUserTweetDocument,
    "\n  #graphql\n  mutation unlikeUserTweet($to: ID!) {\n    unLikeUser(to: $to)\n  }\n": types.UnlikeUserTweetDocument,
    "\n  #graphql\n  mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n": types.FollowUserDocument,
    "\n  #graphql\n  mutation UnFollowUser($to: ID!) {\n    unfollowUser(to: $to)\n  }\n": types.UnFollowUserDocument,
    "#graphql\nquery GetAllTweets{\n    getAllTweets {\n    id\n    content\n    imageUrl\n    likes{\n      id\n      firstName\n    }\n    auther {\n      id\n      firstName\n      lastName\n      profileImageUrl\n    }\n  }\n}\n": types.GetAllTweetsDocument,
    "\n  query GetSignedURL($imageName: String!, $imageType: String!) {\n    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)\n  }\n": types.GetSignedUrlDocument,
    "\n  #graphql\n  query VerifyUserGoogleToken($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n": types.VerifyUserGoogleTokenDocument,
    "\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImageUrl\n      email\n      firstName\n      lastName\n      recommendedUsers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      followers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      following {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      likedTweets{\n        id\n      }\n      tweets {\n        content\n        id\n        imageUrl\n        auther {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  #graphql\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      firstName\n      lastName\n      profileImageUrl\n\n      followers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      following {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      tweets {\n        content\n        id\n        imageUrl\n        auther {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n      }\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  #graphql\n  query GetAllUser {\n  getAllUser {\n    firstName\n    id\n    profileImageUrl\n  }\n}\n": types.GetAllUserDocument,
    "\n  #graphql\n  query GetSearchUser($searchQuery: String!) {\n  getSearchUser(searchQuery: $searchQuery) {\n    id\n    firstName\n    lastName\n    profileImageUrl\n  }\n}\n": types.GetSearchUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation Mutation($content: String, $imageUrl: String) {\n    addTweet(content: $content, imageUrl: $imageUrl) {\n      id\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation Mutation($content: String, $imageUrl: String) {\n    addTweet(content: $content, imageUrl: $imageUrl) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation likeUserTweet($to: ID!) {\n    likeUser(to: $to)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation likeUserTweet($to: ID!) {\n    likeUser(to: $to)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation unlikeUserTweet($to: ID!) {\n    unLikeUser(to: $to)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation unlikeUserTweet($to: ID!) {\n    unLikeUser(to: $to)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n"): (typeof documents)["\n  #graphql\n  mutation FollowUser($to: ID!) {\n  followUser(to: $to)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation UnFollowUser($to: ID!) {\n    unfollowUser(to: $to)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation UnFollowUser($to: ID!) {\n    unfollowUser(to: $to)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nquery GetAllTweets{\n    getAllTweets {\n    id\n    content\n    imageUrl\n    likes{\n      id\n      firstName\n    }\n    auther {\n      id\n      firstName\n      lastName\n      profileImageUrl\n    }\n  }\n}\n"): (typeof documents)["#graphql\nquery GetAllTweets{\n    getAllTweets {\n    id\n    content\n    imageUrl\n    likes{\n      id\n      firstName\n    }\n    auther {\n      id\n      firstName\n      lastName\n      profileImageUrl\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSignedURL($imageName: String!, $imageType: String!) {\n    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)\n  }\n"): (typeof documents)["\n  query GetSignedURL($imageName: String!, $imageType: String!) {\n    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query VerifyUserGoogleToken($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n"): (typeof documents)["\n  #graphql\n  query VerifyUserGoogleToken($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImageUrl\n      email\n      firstName\n      lastName\n      recommendedUsers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      followers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      following {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      likedTweets{\n        id\n      }\n      tweets {\n        content\n        id\n        imageUrl\n        auther {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      profileImageUrl\n      email\n      firstName\n      lastName\n      recommendedUsers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      followers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      following {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      likedTweets{\n        id\n      }\n      tweets {\n        content\n        id\n        imageUrl\n        auther {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      firstName\n      lastName\n      profileImageUrl\n\n      followers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      following {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      tweets {\n        content\n        id\n        imageUrl\n        auther {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      firstName\n      lastName\n      profileImageUrl\n\n      followers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      following {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n      tweets {\n        content\n        id\n        imageUrl\n        auther {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetAllUser {\n  getAllUser {\n    firstName\n    id\n    profileImageUrl\n  }\n}\n"): (typeof documents)["\n  #graphql\n  query GetAllUser {\n  getAllUser {\n    firstName\n    id\n    profileImageUrl\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetSearchUser($searchQuery: String!) {\n  getSearchUser(searchQuery: $searchQuery) {\n    id\n    firstName\n    lastName\n    profileImageUrl\n  }\n}\n"): (typeof documents)["\n  #graphql\n  query GetSearchUser($searchQuery: String!) {\n  getSearchUser(searchQuery: $searchQuery) {\n    id\n    firstName\n    lastName\n    profileImageUrl\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;