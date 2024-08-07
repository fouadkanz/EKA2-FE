import { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import AgentsList from "./sideMenu/AgentsList";
import SessionList from "./sideMenu/SessionList";
import { Config } from "@/lib/configLoader";

export interface ChatSideMenuProps {
  config: Config;
}
const ChatSideMenu:FC<ChatSideMenuProps>= ({config}) => {
  return (
    <>
      {config.components.sideMenu.length > 1 ? (
        <Tabs defaultValue="chats" className="h-[97svh] w-full overflow-auto">
          <TabsList className="sticky top-0 z-50 w-full">
            <TabsTrigger className="w-full" value="chats">
              Chats <Badge variant={"secondary"}>2</Badge>
            </TabsTrigger>
            <TabsTrigger className="w-full" value="agents">
              Agents <Badge variant={"secondary"}>4</Badge>
            </TabsTrigger>
          </TabsList>
          <AgentsList />
          <TabsContent value="chats" className="flex flex-col gap-2 w-full">
            <SessionList />
          </TabsContent>
        </Tabs>
      ) : (
        <SessionList />
      )}
    </>
  );
};

export default ChatSideMenu;
