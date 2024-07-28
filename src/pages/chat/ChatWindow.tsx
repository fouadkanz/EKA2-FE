import MessageList from "./MessageList";
import ChatSuggestion from "./ChatSuggestion";
import ChatMessageInput from "./chatInput/ChatMessageInput";
import { Dispatch } from "react";

export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export interface ChatSession {
  id: number;
  messages: Message[];
}
export interface ChatWindowProps {
  handleSendMessage: (text: string) => void;
  activeSession:ChatSession | undefined;
  setLoading:Dispatch<React.SetStateAction<boolean>>,
  isLoading:boolean,
}
const ChatWindow:React.FC<ChatWindowProps> = ({
  activeSession,
  setLoading,
  isLoading,
  handleSendMessage,
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
