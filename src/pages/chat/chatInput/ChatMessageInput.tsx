import ChatInput from "@/components/ui/ChatInput";
import { useChatInput } from "./useChatInput";
import LoadingBar from "@/components/ui/loadingBar";
export type OnSendMessageType = (text: string) => void;

export interface MessageInputProps {
  onSendMessage: OnSendMessageType;
  isLaoding: boolean;
}

const ChatMessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isLaoding
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
