import { graphqlClient } from "@/clients/api"
import { createTweetMuatation } from "@/graphql/mutation/tweet"
import { getAllTweetsQuery } from "@/graphql/query/tweet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

type MutationInput = {
    content: string;
    imageUrl: string;
  };

export const useCreateTweets = () =>{
    const queryClient = useQueryClient()
    const mutation = useMutation({
       mutationFn:({content,imageUrl}:MutationInput) => graphqlClient.request(createTweetMuatation,{content,imageUrl}),
       onMutate:()=> toast.loading("Tweet Uploading...",{id:"1"}),
       onSuccess: async (payload) => {
       await queryClient.invalidateQueries({queryKey:["all-tweets"]});
       toast.success("Created success",{id:"1"});
    },
    });
    return mutation

}

export const useGetAllTweets = () =>{
    const query = useQuery({
        queryKey:["all-tweets"],
        queryFn: () => graphqlClient.request(getAllTweetsQuery)
    })
   return {...query,tweets: query.data?.getAllTweets}
}