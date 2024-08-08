import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { BotIcon, Home, LogOut, Settings } from "lucide-react";
import jeraLogo from "../../assets/jera_logo.svg";
interface NavBarProps {
  appName: string;
}
const NavBar: React.FC<NavBarProps> = ({ appName }) => {
  return (
    <div className="flex md:flex-col md:justify-between md:h-screen justify-center">
      <div className="hidden md:block">
        <div className="flex flex-col m-3">
          <img src={jeraLogo} alt="JERA Logo" className="h-[34px] w-[90px]" />
          <span className="text-[#8096A3] h-[34px] w-[90px] text-lg uppercase">
            {appName}
          </span>
        </div>
      </div>
      <div className="hidden md:block space-y-7">
        <div className="rounded-xl h-[47px] w-[49px] m-3 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:cursor-pointer">
          <Home className="size-6" />
        </div>
        <div className="rounded-xl h-[47px] w-[49px] m-3 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:cursor-pointer">
          <BotIcon className="size-6" />
        </div>
        <div className="rounded-xl h-[47px] w-[49px] m-3 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:cursor-pointer">
          <Settings className="size-6" />
        </div>
      </div>
      <div className="md:hidden flex flex-row">
        <Home className="size-14 rounded-xl m-3 p-4 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
        <BotIcon className="size-14 rounded-xl m-3 p-4 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
        <Settings className="size-14 rounded-xl m-3 p-4 hover:bg-slate-900 hover:text-white hover:cursor-pointer" />
      </div>
      <div className="hidden md:block">
      <div className="rounded-xl h-[47px] w-[49px] m-3">
        <Avatar className="size-12 rounded-xl bg-slate-900 flex items-center justify-center">
          <AvatarFallback className="text-slate-50 uppercase text-lg ">
            CV
          </AvatarFallback>
        </Avatar>
        </div>
        <div className="rounded-xl h-[47px] w-[49px] m-3 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:cursor-pointer">
        <LogOut className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
