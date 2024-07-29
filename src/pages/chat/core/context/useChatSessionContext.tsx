import { useContext } from "react";
import { ChatSessionContext } from "./MessageContext";

export const useChatSessionContext = () => {
    const context = useContext(ChatSessionContext);
    if (!context) {
      throw new Error('useChatSessionContext must be used within a ChatSessionProvider');
    }
    return context;
  };