import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { ChatSession } from '../../ChatWindow';
import { Review } from "../../MessageList";

import { useChatSession } from "../hooks/useChatSession";

export interface ChatSessionContextType {
  handleSendMessage: (text: string) => void;
  handleNewChat: () => void;
  activeSession:ChatSession | undefined; 
  handleSelectSession: (sessionId: number) => void;
  sessions: ChatSession[]; 
  setSessions:Dispatch<SetStateAction<ChatSession[]>>
  activeSessionId: number | null
  setActiveSessionId:Dispatch<SetStateAction<number| null>>
  isLoading: boolean;
  setLoading:Dispatch<SetStateAction<boolean>>
  handleThumbsUpDown: (messageID: number|undefined, isThumbsUp: Review,direction:"up" | "down") => void;
}

export const ChatSessionContext = createContext<ChatSessionContextType | undefined>(undefined);



  export const ChatSessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const chatSession = useChatSession();
  
    return (
      <ChatSessionContext.Provider value={chatSession}>
        {children}
      </ChatSessionContext.Provider>
    );
  };


