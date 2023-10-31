import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import { graphqlClient } from "@/clients/api";
import { getUserByIdQuery } from "@/graphql/query/user";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "@/gql/graphql";
import NotFound from "../not-found";
import { Follow } from "@/components/Follow";



export default async function Page({ params }: { params: { id: string } }) {
  const userInfo = await graphqlClient.request(getUserByIdQuery, {
    id: params.id,
  });
  if (!userInfo || !userInfo.getUserById) {
    return <NotFound />;
  }

  return (
    <div>
      <nav className="flex items-center gap-2 py-3 px-3">
        <BsArrowLeftShort className="text-4xl" />
        <div>
          <h1 className="text-2xl font-bold ">
            {userInfo.getUserById?.firstName}
          </h1>
          <h1 className="text-md text-slate-500">
            {userInfo.getUserById?.tweets?.length}
          </h1>
        </div>
      </nav>
      <div className="border-b border-slate-800">
        {userInfo.getUserById?.profileImageUrl && (
          <Image
            src={userInfo.getUserById?.profileImageUrl}
            alt="Profile-Image"
            width={100}
            height={100}
            className="rounded-full mb-5 ml-4"
          />
        )}
        <h1 className="text-2xl font-bold pl-4 my-5 ">
          {userInfo.getUserById?.firstName}
        </h1>
        <div className="flex gap-4 mt-2 text-lg text-slate-400 p-4 justify-between">
          <div className="flex gap-5">
            <span>{userInfo.getUserById.followers?.length} Followers</span>
            <span>{userInfo.getUserById.following?.length} Following</span>
          </div>

          <Follow info={params.id}/>
        </div>
      </div>
      <div>
        {userInfo.getUserById?.tweets?.map((tweet) => (
          <FeedCard key={tweet?.id} dataTweet={tweet as Tweet} ></FeedCard>
        ))}
      </div>
    </div>
  );
}
