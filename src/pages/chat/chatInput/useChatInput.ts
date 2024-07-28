import { useState } from "react";
import { OnSendMessageType } from "./ChatMessageInput";

export function useChatInput(onSendMessage:OnSendMessageType){
    const [text, setText] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (text.trim()) {
        onSendMessage(text);
        setText('');
      }
    };
  
    return {
        text,
        setText,
        handleSubmit
    }
}