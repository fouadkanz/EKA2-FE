import PageMenu from "@/components/ui/pageMenu";
import { BotIcon, MessageCircle } from "lucide-react";
import jeraLogo from "../../assets/jera_logo.svg";
import { Badge } from "@/components/ui/badge";
import { convertToMMDDYY } from "@/lib/utils";
const HeaderChat = ({
  sessions,
  handleSelectSession,
  handleNewChat,
  activeSession,
  appName,
  config,
}) => {
  return (
    <div>
      <header className="text-3xl font-bold md:hidden md:w-24 p-3 flex flex-row space-x-10">
        <div
          className="hover:cursor-pointer"
          onClick={() => console.log("click")}
        >
          <PageMenu
            config={config}
            sessions={sessions}
            onSelectSession={handleSelectSession}
            onNewChat={handleNewChat}
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
          {` ${activeSession ? convertToMMDDYY(activeSession.id) : ""}`}
        </span>
      </header>
    </div>
  );
};

export default HeaderChat;
