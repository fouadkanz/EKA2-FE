import MessageList, { Message } from "./MessageList";
import ChatSuggestion from "./ChatSuggestion";
import ChatMessageInput from "./chatInput/ChatMessageInput";
import { useChatSessionContext } from "./core/context/useChatSessionContext";
import { Fragment } from "react/jsx-runtime";
import { LineWave } from "react-loader-spinner";

export interface ChatSession {
  id: number;
  messages: Message[];
}

const ChatWindow = () => {
  const { activeSession, activeSessionId } = useChatSessionContext();
  console.log("activeSession", activeSession?.id);
  console.log("activeSessionId", activeSessionId);
  return activeSession ? (
    <Fragment>
      <MessageList activeSession={activeSession} />
      {activeSession.messages.length === 1 && <ChatSuggestion />}
      <ChatMessageInput />
    </Fragment>
  ) : (
    <LineWave
      visible={true}
      color="#334155"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center h-full"
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};

export default ChatWindow;
