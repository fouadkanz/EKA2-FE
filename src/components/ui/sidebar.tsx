import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Bot, BotIcon, Home, LogOut, Settings } from "lucide-react";
import React from "react";

function SideBar() {
  return (
    <>
      <div>JERA eka2</div>
      <div className="">
        <Home className="size-12 rounded-xl m-3 p-3 bg-slate-900 text-white" />
        <BotIcon className="size-12 rounded-xl m-3 p-3  text-slate-900" />
        <Settings className="size-12 rounded-xl m-3 p-3  text-slate-900" />
      </div>
      <div>
        <Avatar className="h-64 w-16 rounded-xl m-3 p-3  bg-slate-900">
          <AvatarFallback className="text-slate-50 uppercase text-lg">
            CV
          </AvatarFallback>
        </Avatar>
        <LogOut className="size-12 rounded-xl m-3 p-3  text-slate-900" />
      </div>
    </>
  );
}

export default SideBar;
