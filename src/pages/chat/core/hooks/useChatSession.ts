/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ChatSession } from "../../ChatWindow";
import { Message, Review } from "../../MessageList";
import { useToast } from "@/components/ui/use-toast";
import { formatDate } from "@/lib/utils";

export function useChatSession() {
  const dateNow = Date.now()
  const { toast } = useToast()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [sessions, setSessions] = useState<ChatSession[]>([{
    id: dateNow,
    messages: [
      {
        id: Date.now(),
        text: 'Hello {user}, how can I assist you today?',
        sender: 'Emily'
      }
    ]
  }]);
  const [activeSessionId, setActiveSessionId] = useState<number | null>(sessions[0].id);
  const handleThumbsUpDown = (messageID: number | undefined, review: Review, direction: "up" | "down"):boolean => {
    if (!messageID) {
      return false
    }

    setSessions((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === activeSessionId) {
          const message = session.messages.find((msg) => msg.id === messageID);
          if (message) {
            if (direction === "up") {
              message.thumbsUp = review;
            }
            if (direction === "down") {
              message.thumbsDown = review;
            }
          }
        }
        return session;
      })
    );
    toast({
      title: "Review has been added !",
      description: formatDate(new Date()),
    })
    return true
  };
  const [activeSession, setActiveSession] = useState<ChatSession | null>(null);
  useEffect(() => {
    const session = sessions.find((session) => session.id === activeSessionId);
    if (session) setActiveSession(session);
  }, [activeSessionId, sessions]);
  const handleSelectSession = (sessionId: number | null) => {
    if (sessionId) {
      setActiveSessionId(sessionId)
    }
  };

  useEffect(() => {
    const savedSessions = localStorage.getItem('chatSessions');
    if (savedSessions) {
      setSessions(JSON.parse(savedSessions));
      const sizeArray = JSON.parse(savedSessions).length
      setActiveSession(JSON.parse(savedSessions)[sizeArray-1])
      setActiveSessionId(JSON.parse(savedSessions)[sizeArray-1].id)
    } else {
      // Create initial session with a welcome message
      const initialSession: ChatSession = {
        id: Date.now(),
        messages: [
          {
            id: Date.now(),
            text: 'Hello {user}, how can I assist you today ?',
            sender: 'Emily'
          }
        ]
      };
      setSessions([initialSession]);
      setActiveSessionId(initialSession.id);
      setActiveSession(initialSession)
    }
  }, []);

  useEffect(() => {
    // Save chat sessions to local storage whenever they change
    localStorage.setItem('chatSessions', JSON.stringify(sessions));
  }, [sessions]);
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
      const aiMessage: Message = { id: Date.now(), text: 'AI response to: ' + text, sender: 'Emily' };
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
    const newSession: ChatSession = {
      id: Date.now(), messages: [{
        id: Date.now(),
        text: 'Hello {user}, how can I assist you today?',
        sender: 'Emily'
      }]
    };
    setSessions((prevSessions) => [...prevSessions, newSession]);
    setActiveSessionId(newSession.id);
  };


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
    handleThumbsUpDown,
    toast
  }
}
