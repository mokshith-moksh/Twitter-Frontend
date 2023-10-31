import Image from 'next/image'
import { BiMessage, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { Tweet, User } from "@/gql/graphql";
import { graphqlClient } from "@/clients/api";
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import { useQueryClient } from "@tanstack/react-query";


import Link from 'next/link'

import {
  likeUserTweetMutation,
  unlikeUserTweetMutation,
} from "@/graphql/mutation/tweet";
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useGetAllTweets } from '@/hooks/tweet';

interface FeedCardProps {
  dataTweet: Tweet;
  dataUser?: User;
}
export default function FeedCard ({ dataTweet,dataUser }: FeedCardProps) {
  const queryClient = useQueryClient();

  const handleUnLike = useCallback(async () => {
    await graphqlClient.request(unlikeUserTweetMutation, { to: dataTweet.id });
    await queryClient.invalidateQueries({ queryKey: ["all-tweets"] })
    await queryClient.invalidateQueries({ queryKey: ["currentUser"] })


    
  },[dataTweet.id, queryClient]);

  const handleLike = useCallback(async () => {
    await graphqlClient.request(likeUserTweetMutation, { to: dataTweet.id });
    await queryClient.invalidateQueries({ queryKey: ["all-tweets"] })
    await queryClient.invalidateQueries({ queryKey: ["currentUser"] })


  },[dataTweet.id, queryClient]) 


  const amIliked = useMemo(() => {
    if (!dataTweet) return false;

    return (
      (dataUser?.likedTweets?.findIndex(
        (el) => el?.id === dataTweet.id
      ) ?? -1) >= 0
    );
  },[dataTweet, dataUser?.likedTweets]) 

 
 
  return (
    <div className="border-t-[0.5px] border-gray-600  hover:bg-gray-950 cursor-pointer transition-all p-2 ">
      <div className="grid grid-cols-12  border-gray-600 gap-3">
        <div className=" col-span-1">
          {dataTweet.auther?.profileImageUrl && (
            <Image
              src={dataTweet.auther?.profileImageUrl}
              alt="User-image"
              width={50}
              height={50}
              className="rounded-2xl"
            />
          )}
        </div>
        <div className=" col-span-11">
          {dataTweet.auther?.id && (
            <Link href={`${dataTweet.auther?.id}`}>
              {dataTweet.auther?.firstName} {dataTweet.auther?.lastName}
            </Link>
          )}
          <p>{dataTweet.content}</p>
          {dataTweet.imageUrl && (
            <Image
              src={dataTweet.imageUrl}
              alt="tweet-image"
              width={500}
              height={500}
            />
          )}
          <div className="flex justify-between mt-5 text-2xl items-center p-2 w-[90%] text-gray-500">
            <div>
              <BiMessage />
            </div>

            <div>
              <FaRetweet />
            </div>
            <div className="flex gap-2">
             {
              amIliked ? <AiFillHeart onClick={handleUnLike} className="text-red-600"/> : <AiOutlineHeart onClick={handleLike}/>
             }
            <div className="text-lg">{dataTweet.likes?.length}</div>
            </div> 
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
