import PageMenu from "@/components/ui/pageMenu";
import { MessageCircle } from "lucide-react";
import jeraLogo from "../../assets/jera_logo.svg";
import { convertToMMDDYY } from "@/lib/utils";
import { FC, useContext } from "react";
import { ChatSessionContext } from "./core/context/MessageContext";
import { Config } from "@/lib/configLoader";
export interface HeaderChatProps {
  appName:string;
  config:Config
}
const HeaderChat:FC<HeaderChatProps> = ({appName,config}) => {
  const headerContext = useContext(ChatSessionContext);
  return (
    <div>
      <header className="text-3xl font-bold md:hidden md:w-24 p-3 flex flex-row space-x-10">
        <div
          className="hover:cursor-pointer"
          onClick={() => console.log("click")}
        >
          <PageMenu
          config={config}
          />
        </div>
        <div className="flex items-center">
          <img src={jeraLogo} alt="JERA Logo" className="h-8 w-12" />
          <span className="text-[#8096A3] text-sm ml-2 mt-2 uppercase">
            {appName}
          </span>
        </div>
      </header>
      <header className="md:h-20 h-10 md:pl-3 md:py-5 my-2">
        <span className="flex flex-row gap-3 text-xl">
          <MessageCircle className="md:size-9 size-7" /> Chat Session
          {` ${headerContext?.activeSession ? convertToMMDDYY(`${headerContext.activeSession.id}`) : ""}`}
        </span>
      </header>
    </div>
  );
};

export default HeaderChat;
