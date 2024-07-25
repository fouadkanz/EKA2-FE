import MessageList from "./MessageList";
import ChatSuggestion from "./ChatSuggestion";
import ChatMessageInput from "./chatInput/ChatMessageInput";

export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export interface ChatSession {
  id: number;
  messages: Message[];
}

const ChatWindow = ({
  activeSession,
  setLoading,
  isLoading,
  handleSendMessage,
  config
}) => {
  return (
    <>
      <MessageList
        messages={activeSession?.messages}
        setLoading={setLoading}
        isLoading={isLoading}
      />
        {activeSession && activeSession.messages.length === 1 && (
          <ChatSuggestion />
        )}
        <ChatMessageInput
          isLaoding={isLoading}
          onSendMessage={handleSendMessage}
        />
    </>
  );
};

export default ChatWindow;
