import ChatInput from "@/components/ui/ChatInput";
import { useChatInput } from "./useChatInput";
import { StopCircle } from "lucide-react";
import { Comment, ProgressBar } from "react-loader-spinner";
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
    <div className="p-3">
      {!isLaoding ? (
        <ChatInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          submit={handleSubmit}
        />
      ) : (
        <div className={`flex items-center border rounded-full shadow-sm p-1`}>
          <div
            className={`${
              isLaoding ? "w-full" : " w-1/5"
            } translate-x-0  transition-all duration-1000 ease-in-out transform flex items-center justify-center h-12 bg-gradient-to-r from-[#424549] to-[#9FA6AF] rounded-full`}
          >
            Generating output...
          </div>
          <button className=" p-2 rounded-full">
            <span className="sr-only">Send</span>
            <div className="flex items-center justify-center w-10 h-10 bg-[#334155] rounded-full hover:bg-[#49586d]">
              <StopCircle className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatMessageInput;
