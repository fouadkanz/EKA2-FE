import React from "react";
import { Message } from "./ChatWindow";
import { groupSessionsByWeek } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
interface ChatSession {
  id: number;
  messages: Message[];
}

interface ChatSessionListProps {
  sessions: ChatSession[];
  onSelectSession: (sessionId: number) => void;
  onNewChat: () => void;
}

const ChatSessionList: React.FC<ChatSessionListProps> = ({
  sessions,
  onSelectSession,
  onNewChat,
}) => {
  const groupedSessions = groupSessionsByWeek(sessions);
  return (
      <ScrollArea className="h-[96svh] rounded-md p-4">
      <div className="sticky top-0 h-14 bg-white flex flex-row space-x-2 pt-2 z-50">
        <Button
          className="relative w-11 hover:w-28 flex transition-all duration-300 overflow-hidden"
          onClick={onNewChat}
          size="icon"
        >
          <PlusIcon className=""/>
          {/* <span>
            Add topic
          </span> */}
        </Button>
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-5 text-muted-foreground" />
          <Input className="flex w-full px-3 py-1 pl-10" placeholder="Search" />
        </div>
      </div>
        <Accordion className="border p-5 rounded-lg" type="multiple">
          {Object.keys(groupedSessions).map((week) => (
            <AccordionItem key={week} value={week}>
              <AccordionTrigger>{week}</AccordionTrigger>
              <AccordionContent className="flex flex-col space-y-1">
                {groupedSessions[week].map((session) => (
                  <div
                    key={session.id}
                    onClick={() => onSelectSession(session.id)}
                    className="cursor-pointer p-2 hover:bg-slate-100 rounded-md text-slate-900"
                  >
                    Chat Session {session.id}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
          
        </Accordion>
      </ScrollArea>
  );
};

export default ChatSessionList;
