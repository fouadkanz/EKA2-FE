import ChatInput from "@/components/ui/ChatInput";
import { useChatInput } from "./useChatInput";
import LoadingBar from "@/components/ui/loadingBar";
import { useChatSessionContext } from "../core/context/useChatSessionContext";
export type OnSendMessageType = (text: string) => void;

const ChatMessageInput=() => {
  const { handleSendMessage,isLoading } = useChatSessionContext();
  const { handleSubmit, setText, text } = useChatInput(handleSendMessage);
  const handleFileDrop = (files: FileList) => {
    // Handle the dropped files here
    console.log('Files dropped:', files);
};
  return (
    <div className="md:p-3">
      {!isLoading ? (
        <ChatInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          submit={handleSubmit}
          onFileDrop={handleFileDrop}
        />
      ) : (
       <LoadingBar isLaoding={isLoading}/>
      )}
    </div>
  );
};

export default ChatMessageInput;
