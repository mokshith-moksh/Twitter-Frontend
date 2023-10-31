"use client";
import { graphqlClient } from "@/clients/api";
import { UnfollowUserMuatation, followUserMuatation } from "@/graphql/mutation/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useMemo } from "react";

interface FollowCardProps {
  info: string;
}

export const Follow: React.FC<FollowCardProps> = ({ info }) => {
  const { user: currentUser } = useCurrentUser();
  const queryClient = useQueryClient();

  const amIfollowing = useMemo(() => {
    if (!info) return false;
    return (
      //need to make understand
      (currentUser?.following?.findIndex((el) => el?.id === info) ?? -1) >= 0
    );
  }, [currentUser?.following, info]);

  const handleFollowUser = useCallback(async () => {
    await graphqlClient.request(followUserMuatation,{to:info})
    await queryClient.invalidateQueries({ queryKey: ["currentUser"] })
  }, [info, queryClient]);

  const unhandleFollowUser = useCallback(async () => {
    await graphqlClient.request(UnfollowUserMuatation,{to:info})
    await queryClient.invalidateQueries({ queryKey: ["currentUser"] })
  }, [info, queryClient]);

  return (
    <div>
      {currentUser?.id !== info && (
        <>
          {
            //see to these
            amIfollowing ? (
              <button className="bg-white text-black px-3 py-1 rounded-full font-bold" onClick={unhandleFollowUser}>
                Unfollow
              </button>
            ) : (
              <button
                className="bg-white text-black px-3 py-1 rounded-full font-bold"
                onClick={handleFollowUser}
              >
                Follow
              </button>
            )
          }
        </>
      )}
    </div>
  );
};
