import ChatInput from "@/components/ui/ChatInput";
import { useChatInput } from "./useChatInput";
import { StopCircle } from "lucide-react";
import { Comment, ProgressBar } from "react-loader-spinner";
import LoadingBar from "@/components/ui/loadingBar";
export type OnSendMessageType = (text: string) => void;

export interface MessageInputProps {
  onSendMessage: OnSendMessageType;
  isLaoding: boolean;
}

const ChatMessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isLaoding,
}) => {
  const { handleSubmit, setText, text } = useChatInput(onSendMessage);
  return (
    <div className="md:p-3">
      {!isLaoding ? (
        <ChatInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          submit={handleSubmit}
        />
      ) : (
       <LoadingBar isLaoding={isLaoding}/>
      )}
    </div>
  );
};

export default ChatMessageInput;
