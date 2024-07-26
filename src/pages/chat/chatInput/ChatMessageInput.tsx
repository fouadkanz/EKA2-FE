import ChatInput from "@/components/ui/ChatInput";
import { useChatInput } from "./useChatInput";
import { StopCircle } from "lucide-react";
import { Comment, ProgressBar } from "react-loader-spinner";
import LoadingBar from "@/components/ui/loadingBar";
import { ToastAction } from "@/components/ui/toast";
export type OnSendMessageType = (text: string) => void;

export interface MessageInputProps {
  onSendMessage: OnSendMessageType;
  isLaoding: boolean;
  toast:()=>void
}

const ChatMessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isLaoding,
  toast
}) => {

  const { handleSubmit, setText, text } = useChatInput(onSendMessage);
  const handleFileDrop = (files: FileList) => {
    // Handle the dropped files here
    console.log('Files dropped:', files);
   
};
  return (
    <div className="md:p-3">
      {!isLaoding ? (
        <ChatInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          submit={handleSubmit}
          onFileDrop={handleFileDrop}
        />
      ) : (
       <LoadingBar isLaoding={isLaoding}/>
      )}
    </div>
  );
};

export default ChatMessageInput;
