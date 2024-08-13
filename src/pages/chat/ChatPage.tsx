import { FC } from "react";
import HeaderChat from "./HeaderChat";
import ChatWindow from "./ChatWindow";
import ChatSideMenu from "./ChatSessionList";
import Sidebar from "@/components/ui/sidebar";
import { Config } from "@/lib/configLoader";
interface ChatPageProps {
  config: Config;
  appName: string;
}
const ChatPage: FC<ChatPageProps> = ({ config, appName }) => {
  return (
    <div className="md:flex md:flex-grow">
      <nav className="hidden md:block">
        <Sidebar appName={appName} />
      </nav>
      <main className="flex flex-col flex-grow p-2 text-center h-screen w-screen">
        <HeaderChat appName={appName} config={config} />
        <ChatWindow />
        <nav className="h-20 text-center md:hidden block">
          <Sidebar appName={appName} />
        </nav>
      </main>
      <aside className="md:h-[100vh] md:flex-shrink-0 w-1/4 md:p-3 md:text-center hidden md:block md:overflow-auto overflow-auto">
        <ChatSideMenu config={config} />
      </aside>
    </div>
  );
};

export default ChatPage;
