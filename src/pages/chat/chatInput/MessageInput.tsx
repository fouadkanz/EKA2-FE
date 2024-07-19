import { useChatInput } from "./useChatInput";
export type OnSendMessageType = (text: string) => void;

export interface MessageInputProps {
  onSendMessage: OnSendMessageType;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
const {handleSubmit,setText,text} = useChatInput(onSendMessage)
  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
      className='w-23'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
