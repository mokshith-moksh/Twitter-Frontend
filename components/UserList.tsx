import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button"



interface User {
  id: string;
  firstName: string;
  lastName?: string;
  profileImageUrl?: string;
}

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div className="grid grid-cols-1">
      {users.map((user) => (
        <div className="grid grid-cols-3 my-2 p-4 " key={user.id}>
           <div>
          {  user.profileImageUrl &&
            <Image
              src={user.profileImageUrl}
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full"
            />}
          </div>
         <div className="flex flex-col "> <span className="font-bold">{user.firstName} {user.lastName}</span> <span className="text-[#536471]"> @{user.firstName}</span></div>
          <div className="ml-5 p-2"><Button>
           <Link href={`/${user.id}`}>
           View
           </Link></Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
