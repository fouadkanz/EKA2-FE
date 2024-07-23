import ChatInput from '@/components/ui/ChatInput'
import { useChatInput } from './useChatInput';
export type OnSendMessageType = (text: string) => void;

export interface MessageInputProps {
    onSendMessage: OnSendMessageType;
}

const ChatMessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
    const { handleSubmit, setText, text } = useChatInput(onSendMessage)
    return (
        <div className="p-3">
            <ChatInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
                submit={handleSubmit}
            />
        </div>
    )
}

export default ChatMessageInput