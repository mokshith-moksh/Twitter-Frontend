"use client";
import React, { use, useCallback, useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { useCurrentUser } from "../hooks/user";
import Image from "next/image";
import { useCreateTweets, useGetAllTweets } from "@/hooks/tweet";
import { Tweet, User } from "@/gql/graphql";
import { graphqlClient } from "@/clients/api";
import { getSignedURLForTweetQuery } from "@/graphql/query/tweet";
import axios from "axios";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea"


export default function Home() {
  const { user } = useCurrentUser();
  const [content, setContent] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const { tweets = [] } = useGetAllTweets();
  const { mutate } = useCreateTweets();

  const handleInputChangeFile = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();
      const file: File | undefined | null = input.files?.item(0);
      if (!file) return;

      const { getSignedURLForTweet } = await graphqlClient.request(
        getSignedURLForTweetQuery,
        {
          imageName: file.name,
          imageType: file.type,
        }
      );

      if (getSignedURLForTweet) {
        toast.loading("Uploading...", { id: "2" });
        await axios.put(getSignedURLForTweet, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        toast.success("Uploaded completed", { id: "2" });
        const url = new URL(getSignedURLForTweet);
        const myFilePath = `${url.origin}${url.pathname}`;
        setImageUrl(myFilePath);
      }
    };
  }, []);

  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    const handlerFn = handleInputChangeFile(input);

    input.addEventListener("change", handlerFn);

    input.click();
  }, [handleInputChangeFile]);

  const handleTweetSubmit = useCallback(() => {
    if(!user){return toast.error("login to tweet")} 
    if (!content) return toast.error("Please enter the tweet");
    mutate({
      content,
      imageUrl: ImageUrl,
    }),
      setContent("");
    setImageUrl("");
  }, [user, content, mutate, ImageUrl]);

  return (
    <div>
      <div className="border-t-[0.5px] border-gray-600  cursor-pointer transition-all p-2  ">
        <div className="grid grid-cols-12  border-gray-600 gap-3">
          <div className=" col-span-1">
            {user?.profileImageUrl && (
              <Image
                src={user?.profileImageUrl}
                alt="User-image"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
          </div>
          <div className=" col-span-11">
          { user &&   <div>

            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border-b-2 w-full bg-transparent text-xl px-3 border-b-slate-700 "
              rows={3}
              placeholder="What's happening?!"
            />
            {ImageUrl && (
              <Image
                src={`${ImageUrl}`}
                alt="teweet-image"
                width={300}
                height={300}
              />
            )}
            <div className="flex justify-between mt-2 items-center">
              <BiImageAlt onClick={handleSelectImage} className="text-xl" />
              <button
                onClick={handleTweetSubmit}
                className="bg-[#1d9bf0] font-semibold py-2 text-sm px-4 rounded-full  mt-4"
              >
                Tweet
              </button>
            </div>
            </div>}
          </div>
        </div>
      </div>

      {tweets
        ?.slice(0)
        .reverse()
        .map((tweet) => (
          <FeedCard dataTweet={tweet as Tweet} key={tweet?.id} dataUser={user as User} />
        ))}
    </div>
  );
}
