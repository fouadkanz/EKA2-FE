import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './chatInput/MessageInput';
import ChatSessionList from './ChatSessionList';
import { useChatSession } from './useChatSession';

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export interface ChatSession {
  id: number;
  messages: Message[];
}

const ChatWindow: React.FC = () => {
 const {activeSession,sessions,handleSelectSession,handleNewChat,handleSendMessage} = useChatSession()
  return (
    <>
      <ChatSessionList sessions={sessions} onSelectSession={handleSelectSession} onNewChat={handleNewChat} />
      {activeSession ? (
        <div className="chat-window">
          <MessageList messages={activeSession.messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      ) : (
        <div className="select-chat-prompt">Please select or create a new chat session</div>
      )}
    </>
  );
};

export default ChatWindow;
