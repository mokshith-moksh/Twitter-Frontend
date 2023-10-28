
import React from "react";
import Image from "next/image";
import { BiMessage, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Tweet } from "@/gql/graphql";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/user";



interface FeedCardProps {
  data:Tweet
}
const FeedCard: React.FC<FeedCardProps> =  ({data}) => {

  return (
   
    <div className="border-t-[0.5px] border-gray-600  hover:bg-gray-950 cursor-pointer transition-all p-2 ">
      <div className="grid grid-cols-12  border-gray-600 gap-3">
        <div className=" col-span-1">
        { data.auther?.profileImageUrl &&  <Image
            src={data.auther?.profileImageUrl}
            alt="User-image"
            width={50}
            height={50}
            className="rounded-2xl"
          />}
        </div>
        <div className=" col-span-11">
          {data.auther?.id && <Link href={`${data.auther?.id}`} >{data.auther?.firstName} {data.auther?.lastName}</Link>}
          <p>
           {
            data.content
           }
          </p>
          {
            data.imageUrl && <Image src={data.imageUrl} alt="tweet-image" width={500} height={500} />
          }
         <div className="flex justify-between mt-5 text-2xl items-center p-2 w-[90%] text-gray-500">
         <div>
            <BiMessage />
          </div>

          <div>
            <FaRetweet />
          </div>
          <div>
            <AiOutlineHeart />
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
export default FeedCard;