import ChatInput from "@/components/ui/ChatInput";
import { useChatInput } from "./useChatInput";
import LoadingBar from "@/components/ui/loadingBar";
import { useChatSessionContext } from "../core/context/useChatSessionContext";

export type OnSendMessageType = (text: string) => void;

const ChatMessageInput=() => {
  const { handleSendMessage,isLoading } = useChatSessionContext();
  const { handleSubmit, setText, text } = useChatInput(handleSendMessage);

  return (
    <div className="md:p-3">
      {!isLoading ? (
        <ChatInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          submit={handleSubmit}
        />
      ) : (
       <LoadingBar isLaoding={isLoading}/>
      )}
    </div>
  );
};

export default ChatMessageInput;
