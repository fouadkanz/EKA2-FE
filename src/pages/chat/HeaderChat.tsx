import PageMenu from "@/components/ui/pageMenu";
import { MessageCircle } from "lucide-react";
import jeraLogo from "../../assets/jera_logo.svg";
const HeaderChat = ({ sessions, handleSelectSession, handleNewChat,activeSession,appName,config }) => {
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
          <span className="text-[#8096A3] text-sm ml-2 mt-2 uppercase">{appName}</span>
        </div>
      </header>
      <header className="md:h-20 h-10 md:pl-3 pl-2 md:pb-2 pb-2 flex flex-row space-x-6 md:items-center">
        <div>
          <MessageCircle className="md:size-9 size-7" />
        </div>
        <span className="md:text-3xl text-xl">
          Chat Session{` ${activeSession ? activeSession.id : ""}`}
        </span>
      </header>
    </div>
  );
};

export default HeaderChat;
