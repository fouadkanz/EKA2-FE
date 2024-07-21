import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {  BotIcon, Home, LogOut, Settings } from "lucide-react";


function SideBar() {
  return (
    <div className="flex md:flex-col md:justify-between md:h-screen justify-center">
      <div className="hidden md:block">JERA eka2</div>
      <div className="hidden md:block">
        <Home className="size-12 rounded-xl m-3 p-3 bg-slate-900 text-white" />
        <BotIcon className="size-12 rounded-xl m-3 p-3  text-slate-900" />
        <Settings className="size-12 rounded-xl m-3 p-3  text-slate-900" />
      </div>
      <div className="md:hidden flex flex-row">
        <Home className="size-12 rounded-xl m-3 p-3 bg-slate-900 text-white" />
        <BotIcon className="size-12 rounded-xl m-3 p-3  text-slate-900" />
        <Settings className="size-12 rounded-xl m-3 p-3  text-slate-900" />
      </div>
      <div className="hidden md:block">
        <Avatar className="h-64 w-16 rounded-xl m-3 p-3  bg-slate-900">
          <AvatarFallback className="text-slate-50 uppercase text-lg">
            CV
          </AvatarFallback>
        </Avatar>
        <LogOut className="size-12 rounded-xl m-3 p-3  text-slate-900" />
      </div>
    </div>
  );
}

export default SideBar;
