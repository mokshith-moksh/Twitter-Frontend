import React from "react";
import Image from "next/image";

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
    <div className="text-white font-3xl bg-slate-500">
      {users.map((user) => (
        <div className="text-white text-3xl" key={user.id}>
          {user.firstName}
        </div>
      ))}
    </div>
  );
};

export default UserList;
