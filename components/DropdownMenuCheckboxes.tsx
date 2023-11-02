"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCallback } from "react";
import { BiLogOut } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import { ModeToggle } from "./ModeToggle";

export function DropdownMenuCheckboxes() {
  const handleLogout = useCallback(() => {
    // Remove the Twitter token from local storage.
    window.localStorage.removeItem("__Twitter_token");

    // Reload the page.
    location.reload();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hover:bg-[#cbced1]  dark:hover:bg-[#2e291f] flex justify-start items-center gap-4 mt-5  rounded-full px-5 py-2 cursor-pointer w-fit">
          <SlOptions />
          <button className="text-2xl font-bold">More</button>   
        </div>
       
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel >More</DropdownMenuLabel>
        <DropdownMenuSeparator  />
        <DropdownMenuCheckboxItem onClick={handleLogout} >
          <div className="flex gap-6 justify-center items-center text-xl font-bold">
            <BiLogOut />
            Logout
          </div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
