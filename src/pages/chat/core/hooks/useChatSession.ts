/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ChatSession } from "../../ChatWindow";
import { Message, Review } from "../../MessageList";


export function useChatSession() {
  const dateNow = Date.now()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [sessions, setSessions] = useState<ChatSession[]>([{
    id: dateNow,
    messages: [
      {
        id: Date.now(),
        text: 'Hello {user}, how can I assist you today?',
        sender: 'ai'
      }
    ]
  }]);
  const [activeSessionId, setActiveSessionId] = useState<number | null>(dateNow);

  const handleThumbsUpDown = (messageID: number | undefined, review: Review, direction: "up" | "down") => {
    if (!messageID) {
      return
    }

    setSessions((prevSessions) =>
      prevSessions.map((session) => {
        if (session.id === activeSessionId) {
          const message = session.messages.find((msg) => msg.id === messageID);
          if (message) {
            if (direction === "up") {
              message.thumbsUp = review;
            } else if (direction === "down") {
              message.thumbsDown = review;
            }
          }
        }
        return session;
      })
    );
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
    } else {
      // Create initial session with a welcome message
      const initialSession: ChatSession = {
        id: Date.now(),
        messages: [
          {
            id: Date.now(),
            text: 'Hello {user}, how can I assist you today ?',
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
    const newSession: ChatSession = {
      id: Date.now(), messages: [{
        id: Date.now(),
        text: 'Hello {user}, how can I assist you today?',
        sender: 'ai'
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
  }
}
