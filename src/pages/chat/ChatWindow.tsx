import MessageList, { Review } from "./MessageList";
import ChatSuggestion from "./ChatSuggestion";
import ChatMessageInput from "./chatInput/ChatMessageInput";
import { Dispatch } from "react";
import { useChatSessionContext } from "./core/context/useChatSessionContext";

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
  handleThumbsUpDown: (messageID:number,review:Review) => void
}
const ChatWindow=() => {
  const {
    activeSession
  } = useChatSessionContext();
  return (
    <>
      <MessageList
      />
        {activeSession && activeSession.messages.length === 1 && (
          <ChatSuggestion />
        )}
        <ChatMessageInput
        />
    </>
  );
};

export default ChatWindow;
