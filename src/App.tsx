import "./App.css";
import { MenuIcon, MessageCircle } from "lucide-react";
import ChatSessionList from "./pages/chat/ChatSessionList";
import { useChatSession } from "./pages/chat/useChatSession";
import MessageList from "./pages/chat/MessageList";
import MessageInput from "./pages/chat/MessageInput";
function App() {
  const {
    handleSendMessage,
    activeSession,
    sessions,
    handleSelectSession,
    handleNewChat,
  } = useChatSession();

  return (
    <>
      <div className="flex flex-grow">
        <nav className=" md:flex-shrink-0 md:w-24 p-3 md:text-center hidden md:block">
          JERA eka2
        </nav>
        <main className=" flex-grow p-3">
          <div className="text-3xl font-bold md:hidden md:w-24 p-3 flex flex-row space-x-10">
            <div
              className="pt-2 hover:cursor-pointer"
              onClick={() => console.log("click")}
            >
              <MenuIcon />
            </div>{" "}
            <span>JERA EKA2</span>
          </div>
          <header className="h-15 p-3 flex flex-row space-x-6 justify-center">
            <div>
              <MessageCircle />
            </div>
            <span className="text-xl">
              Chat Session{` ${activeSession ? activeSession.id : ""}`}
            </span>
          </header>
          <div className="bg-white p-3 text-center">
            {activeSession ? (
              <div className="chat-window">
                <MessageList messages={activeSession.messages} />
              </div>
            ) : (
              <div className="select-chat-prompt">
                Please select or create a new chat session
              </div>
            )}
          </div>
        </main>
        <aside className="md:flex-shrink-0 md:w-1/4 md:p-3 md:text-center hidden md:block">
          <ChatSessionList
            sessions={sessions}
            onSelectSession={handleSelectSession}
            onNewChat={handleNewChat}
          />
        </aside>
      </div>
      <div className="h-25 p-3 text-center">
        {activeSession && <MessageInput onSendMessage={handleSendMessage} />}
      </div>
      <nav className="h-25 p-3 text-center md:hidden block">Navigation</nav>
    </>
  );
}

export default App;
