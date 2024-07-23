import "./App.css";
import { MenuIcon, MessageCircle } from "lucide-react";
import ChatSessionList from "./pages/chat/ChatSessionList";
import { useChatSession } from "./pages/chat/useChatSession";
import MessageList from "./pages/chat/MessageList";
// import MessageInput from "./pages/chat/chatInput/MessageInput";
import ChatMessageInput from "./pages/chat/chatInput/ChatMessageInput";
import SideBar from "./components/ui/sidebar";
import ChatSuggestion from "./pages/chat/ChatSuggestion";
import logoJera from "@/assets/images/top-logo-JERA.png"
import PageMenu from "./components/ui/pageMenu";
function App() {
  const {
    handleSendMessage,
    activeSession,
    sessions,
    handleSelectSession,
    handleNewChat,
  } = useChatSession();

  return (
    <div>
      <div className="flex flex-grow md:space-x-20">
        <nav className="hidden md:block">
          <SideBar />
        </nav>
        <main className="flex flex-col flex-grow p-2 text-center h-screen bg-white">
          <div>
            <header className="text-3xl font-bold md:hidden md:w-24 p-3 flex flex-row space-x-10">
              <div
                className="hover:cursor-pointer"
                onClick={() => console.log("click")}
              >
                <PageMenu
                 sessions={sessions}
                 onSelectSession={handleSelectSession}
                 onNewChat={handleNewChat}
                />
              </div>
              <span>JERA EKA2</span>
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
          <MessageList messages={activeSession?.messages} />
          <>
            {activeSession && activeSession.messages.length === 1 && (
              <ChatSuggestion />
            )}
            <ChatMessageInput onSendMessage={handleSendMessage} />
          </>
          <nav className="h-20 text-center md:hidden block">
            <SideBar />
          </nav>
        </main>
        <aside className="max:h-[100vh] md:flex-shrink-0 md:w-1/4 md:p-3 md:text-center hidden md:block">
          <ChatSessionList
            sessions={sessions}
            onSelectSession={handleSelectSession}
            onNewChat={handleNewChat}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
