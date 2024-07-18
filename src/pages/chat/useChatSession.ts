import { useEffect, useState } from "react";
import { ChatSession, Message } from "./ChatWindow";


 export function useChatSession(){
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [activeSessionId, setActiveSessionId] = useState<number | null>(null);
  
    useEffect(() => {
      // Load chat sessions from local storage
      const savedSessions = localStorage.getItem('chatSessions');
      if (savedSessions) {
        setSessions(JSON.parse(savedSessions));
      }
    }, []);
  
    useEffect(() => {
      // Save chat sessions to local storage whenever they change
      localStorage.setItem('chatSessions', JSON.stringify(sessions));
    }, [sessions]);
  
    const handleSendMessage = (text: string) => {
      if (activeSessionId === null) return;
  
      const newMessage: Message = { id: Date.now(), text, sender: 'user' };
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.id === activeSessionId
            ? { ...session, messages: [...session.messages, newMessage] }
            : session
        )
      );
  
      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = { id: Date.now(), text: 'AI response to: ' + text, sender: 'ai' };
        setSessions((prevSessions) =>
          prevSessions.map((session) =>
            session.id === activeSessionId
              ? { ...session, messages: [...session.messages, aiMessage] }
              : session
          )
        );
      }, 1000);
    };
  
    const handleNewChat = () => {
      const newSession: ChatSession = { id: Date.now(), messages: [] };
      setSessions((prevSessions) => [...prevSessions, newSession]);
      setActiveSessionId(newSession.id);
    };
  
    const handleSelectSession = (sessionId: number) => {
      setActiveSessionId(sessionId);
    };
  
    const activeSession = sessions.find((session) => session.id === activeSessionId);
  

    return {
        handleSendMessage,
        handleNewChat,
        activeSession,
        handleSelectSession,
        sessions,
        setSessions,
        activeSessionId,
        setActiveSessionId
    }
}
