import { useEffect, useState } from "react";
import { ChatSession, Message } from "./ChatWindow";
import { useToast } from "@/components/ui/use-toast";


 export function useChatSession(){
  const [isLoading, setLoading] = useState<boolean>(false)
    const [sessions, setSessions] = useState<ChatSession[]>([{
    id: Date.now(),
    messages: [
      {
        id: Date.now(),
        text: 'Hello {user}, how can I assist you today?',
        sender: 'ai'
      }
    ]
  }]);
  const [activeSessionId, setActiveSessionId] = useState<number | null>(sessions[0].id);

  useEffect(() => {
    const savedSessions = localStorage.getItem('chatSessions');
    if (savedSessions) {
      setSessions(JSON.parse(savedSessions));
    } else {
      // Create initial session with a welcome message
      const initialSession: ChatSession = {
        id: Date.now(),
        messages: [
          {
            id: Date.now(),
            text: 'Hello {user}, how can I assist you today?',
            sender: 'ai'
          }
        ]
      };
      setSessions([initialSession]);
      setActiveSessionId(initialSession.id);
    }
  }, []);

  useEffect(() => {
    // Save chat sessions to local storage whenever they change
    localStorage.setItem('chatSessions', JSON.stringify(sessions));
  }, [sessions]);
  const { toast } = useToast()
  const handleSendMessage = (text: string) => {
    if (activeSessionId === null) return;
    setLoading(true)
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
    const newSession: ChatSession = { id: Date.now(), messages: [{
      id: Date.now(),
      text: 'Hello {user}, how can I assist you today?',
      sender: 'ai'
    }] };
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
        setActiveSessionId,
        isLoading, 
        setLoading,
        toast
    }
}
