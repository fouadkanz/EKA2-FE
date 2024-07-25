import "./App.css";
import ChatSessionList from "./pages/chat/ChatSessionList";
import { useChatSession } from "./pages/chat/useChatSession";
import ChatWindow from "./pages/chat/ChatWindow";
import HeaderChat from "./pages/chat/HeaderChat";
import SideBar from "./components/ui/sidebar";
import loadConfig from "./lib/configLoader";
import ChatSideMenu from "./pages/chat/ChatSessionList";
import NavBar from "./components/ui/sidebar";

const appName = import.meta.env.VITE_APP_NAME; // This should be set to 'symbiosis' or 'eka2'
const config = loadConfig(appName || "symbiosis");

function App() {
  console.log(appName);
  const {
    handleSendMessage,
    handleNewChat,
    activeSession,
    handleSelectSession,
    sessions,
    isLoading,
    setLoading,
  } = useChatSession();

  return (
    <>
      <div className="flex flex-grow">
        <nav className="hidden md:block">
          <SideBar appName={appName} />
        </nav>
        <main className="flex flex-col flex-grow p-2 text-center h-screen w-screen">
          <HeaderChat
            config={config}
            appName={appName}
            sessions={sessions}
            handleSelectSession={handleSelectSession}
            handleNewChat={handleNewChat}
            activeSession={activeSession}
          />
          {config.components.chatWindow && (
            <ChatWindow
              config={config}
              activeSession={activeSession}
              setLoading={setLoading}
              isLoading={isLoading}
              handleSendMessage={handleSendMessage}
            />
          )}
          <nav className="h-20 text-center md:hidden block">
            <NavBar/>
          </nav>
        </main>
        <aside className="h-[100vh] md:flex-shrink-0 w-1/4 md:p-3 md:text-center hidden md:block">
          <ChatSideMenu
            config={config}
            sessions={sessions}
            onSelectSession={handleSelectSession}
            onNewChat={handleNewChat}
          />
        </aside>
      </div>
      <div>
        {/* {config.components.sideMenu && (
        <div className="side-menu">
          {config.components.sideMenu.agentListTab && <AgentListTab />}
          {config.components.sideMenu.sessionHistoryTab && <SessionHistoryTab />}
        </div>
      )} */}
      </div>
    </>
  );
}

export default App;
