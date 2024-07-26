import React from "react";
import { Message } from "./ChatWindow";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AgentsList from "./sideMenu/AgentsList";
import SessionList from "./sideMenu/SessionList";
import { Config } from "@/lib/configLoader";

interface ChatSession {
  id: number;
  messages: Message[];
}
export interface ChatSideMenuProps {
  sessions: ChatSession[];
  onSelectSession: (sessionId: number) => void;
  onNewChat: () => void;
  config: Config;
}
const ChatSideMenu: React.FC<ChatSideMenuProps> = ({
  sessions,
  onSelectSession,
  onNewChat,
  config,
}) => {
  return (
    <>
      {config.components.sideMenu.length > 1 ? (
        <Tabs defaultValue="chats" className="h-[97svh] w-full overflow-auto">
          <TabsList className="sticky top-0 z-50 w-full">
            <TabsTrigger className="w-full" value="chats">
              Chats <Badge variant={"secondary"}>2</Badge>
            </TabsTrigger>
            <TabsTrigger className="w-full" value="agents">
              Agents <Badge variant={"secondary"}>2</Badge>
            </TabsTrigger>
          </TabsList>
          <AgentsList />
          <TabsContent value="chats" className="flex flex-col gap-2 w-full">
            <SessionList
              sessions={sessions}
              onSelectSession={onSelectSession}
              onNewChat={onNewChat}
            />
          </TabsContent>
        </Tabs>
      ) : (
          <SessionList
            sessions={sessions}
            onSelectSession={onSelectSession}
            onNewChat={onNewChat}
          />
      )}
    </>
  );
};

export default ChatSideMenu;
