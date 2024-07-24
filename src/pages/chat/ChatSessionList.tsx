import React from "react";
import { Message } from "./ChatWindow";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AgentsList from "./sideMenu/AgentsList";
import SessionList from "./sideMenu/SessionList";

interface ChatSession {
  id: number;
  messages: Message[];
}

export interface ChatSessionListProps {
  sessions: ChatSession[];
  onSelectSession: (sessionId: number) => void;
  onNewChat: () => void;
}

const ChatSessionList: React.FC<ChatSessionListProps> = ({
  sessions,
  onSelectSession,
  onNewChat,
}) => {
  return (
      <Tabs defaultValue="chats" className="h-[97svh] overflow-auto">
        <TabsList className="sticky top-0 z-50 w-full">
        <TabsTrigger className="w-full" value="chats">
            Chats <Badge variant={"secondary"}>2</Badge>
          </TabsTrigger>
          <TabsTrigger className="w-full" value="agents">
            Agents <Badge variant={"secondary"}>2</Badge>
          </TabsTrigger>
        </TabsList>
        <AgentsList />
        <SessionList
          sessions={sessions}
          onSelectSession={onSelectSession}
          onNewChat={onNewChat}
        />
      </Tabs>
  );
};

export default ChatSessionList;
