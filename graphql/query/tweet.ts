import { graphql } from "../../gql";



export const getAllTweetsQuery = graphql(`#graphql
query GetAllTweets{
    getAllTweets {
    id
    content
    imageUrl
    auther {
      id
      firstName
      lastName
      profileImageUrl
    }
  }
}
`)

export const getSignedURLForTweetQuery = graphql(`
  query GetSignedURL($imageName: String!, $imageType: String!) {
    getSignedURLForTweet(imageName: $imageName, imageType: $imageType)
  }
`);