import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/user";
import { graphqlClient } from "@/clients/api";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";
import Link from 'next/link'


interface TwitterlayoutProps {
  children: React.ReactNode;
}

interface TwitterSidebarButon {
  title: string;
  icons: React.ReactNode;
  path:string
}

const TwitterLayout: React.FC<TwitterlayoutProps> = (props) => {
  const { user } = useCurrentUser();
  const SideBarMenuItems: TwitterSidebarButon[] = useMemo(()=>{
   return (
    [
      {
        title: "Home",
        icons: <BiHomeCircle />,
        path:'/'
      },
      {
        title: "Explore",
        icons: <BiHash />,
        path:'/'
      },
      {
        title: "Notifications",
        icons: <BsBell />,
        path:'/'
      },
      {
        title: "Messages",
        icons: <BsEnvelope />,
        path:'/'
      },
      {
        title: "Bookmarks",
        icons: <BsBookmark />,
        path:'/'
      },
      {
        title: "Profile",
        icons: <BiUser />,
        path:`/${user?.id}`
      },
      {
        title: "More",
        icons: <SlOptions />,
        path:'/'
      },
    ]
   )
  },[user?.id]);
  
  const queryClient = useQueryClient();
  const handleLogingWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      

      if (!googleToken) return toast.error("Google token not found");

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyGoogleTokenQuery,
        {
          token: googleToken,
        }
      );

      toast.success("Google");
      if (verifyGoogleToken)
        window.localStorage.setItem("__Twitter_token", verifyGoogleToken);

      //react query again request for current user details using stored verifyGoogleToken;
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    [queryClient]
  );

  return (
    <div>
      <div className="grid grid-cols-12 h-fit w-fit sm:px-[9vw]  ">
        {/* Icons Menu */}
        <div className="col-span-2 sm:col-span-3 pt-1 flex sm:justify-end pr-4 ">
          <div className="mt-6 text-2xl font-bold pr-6 ">
            <div className="text-3xl hover:bg-gray-800 rounded-full p-4 h-fit w-fit cursor-pointer transition-all">
              <BsTwitter />
            </div>
            <ul>
              {SideBarMenuItems.map((item) => (
                <li
                  key={item.title}
                 
                >
                  <Link href={item.path} className="flex justify-start items-center gap-4 mt-5 hover:bg-gray-800 rounded-full px-5 py-2 cursor-pointer w-fit">
                  <span>{item.icons}</span>
                  <span className="hidden sm:block">{item.title}</span></Link>
                </li>
              ))}
            </ul>
            <div className="px-3 mt-5">
              <button className="hidden sm:inline bg-[#1d9bf0] font-semibold py-2 text-lg px-3 rounded-full w-full mt-4">
                Tweet
              </button>
              {user && (
              <div className="grid grid-cols-2 fixed bottom-[1vh] w-40">
                <div>
                  {user?.profileImageUrl && (
                    <Image
                      src={user?.profileImageUrl}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                      className="rounded-full "
                    />
                  )}
                </div>
                <div>
                  <h1 className="hidden sm:block">{user.firstName}</h1>
                </div>
              </div>
            )}
            </div>
            
          </div>
        </div>

        {/* Main Menu */}  
        <div className="col-span-10 sm:col-span-5 border-r-[0.5px] border-l-[0.5px] border-gray-600 overflow-scroll h-screen scrollbar-hide ">
      
          {props.children}
      
        </div>    

        {/* Info Menu */}
        <div className="col-span-0 sm:col-span-3 p-5">
          {!user ? (
            <div className="p-5 rounded-lg">
              <h1 className="my-2 text-2xl">New to Twitter?</h1>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleLogingWithGoogle(credentialResponse);
                }}
                onError={() => {
                  toast.error("Login failed");
                }}
              />
            </div>
          ):(
            <div className="px-4 py-3 bg-slate-800 rounded-lg">{
              user?.recommendedUsers?.map((el)=>(
                <div className="flex items-center gap-3 mt-2" key={el?.id}>
                   {el?.profileImageUrl && (
                    <Image
                      src={el?.profileImageUrl}
                      alt="user-image"
                      className="rounded-full"
                      width={60}
                      height={60}
                    />
                  )}
                  <div>
                    <div className="text-lg">
                      {el?.firstName} {el?.lastName}
                    </div>
                    <Link
                      href={`/${el?.id}`}
                      className="bg-white text-black text-sm px-5 py-1 w-full rounded-lg"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))
          }</div> )}
        </div>
      </div>
    </div>
  );
};

export default TwitterLayout;
