import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { BotIcon, Home, LogOut, Settings } from "lucide-react";
import jeraLogo from '../../assets/jera_logo.svg';
interface NavBarProps{
  appName:string
}
const NavBar:React.FC<NavBarProps>=({appName})=> {
  return (
    <div className="flex md:flex-col md:justify-between md:h-screen justify-center">
      <div className="hidden md:block">
        <div className="flex flex-col m-3">
          <img src={jeraLogo} alt="JERA Logo" className="h-[34px] w-[90px]" />
          <span className="text-[#8096A3] h-[34px] w-[90px] text-lg uppercase">{appName}</span>
        </div>
      </div>
      <div className="hidden md:block">
        <Home className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
        <BotIcon className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
        <Settings className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
      </div>
      <div className="md:hidden flex flex-row">
        <Home className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
        <BotIcon className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
        <Settings className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
      </div>
      <div className="hidden md:block">
        <Avatar className="h-64 w-16 rounded-xl m-3 p-3 bg-slate-900">
          <AvatarFallback className="text-slate-50 uppercase text-lg">
            CV
          </AvatarFallback>
        </Avatar>
        <LogOut className="size-12 rounded-xl m-3 p-3 hover:bg-slate-900 hover:text-white" />
      </div>
    </div>
  );
}

export default NavBar;
