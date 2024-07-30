import MessageList, { Message } from "./MessageList";
import ChatSuggestion from "./ChatSuggestion";
import ChatMessageInput from "./chatInput/ChatMessageInput";
import { useChatSessionContext } from "./core/context/useChatSessionContext";


export interface ChatSession {
  id: number;
  messages: Message[];
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
