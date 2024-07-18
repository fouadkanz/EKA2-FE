import React from 'react';
import { Message } from './ChatWindow';
import { groupSessionsByWeek } from '@/lib/utils';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
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
    <div className="overflow-auto">
      <Button onClick={onNewChat} size={'sm'}>Add topic</Button>
      <Accordion type="multiple">
        {Object.keys(groupedSessions).map(week => (
              <AccordionItem key={week}  value={week}>
              <AccordionTrigger>{week}</AccordionTrigger>
              <AccordionContent className='flex flex-col space-y-1'>
                {groupedSessions[week].map(session => (
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
        //   <li key={week}>
        //     <div
        //       onClick={() => toggleWeek(week)}
        //       className="cursor-pointer font-bold"
        //     >
        //       {week}
        //     </div>
            
        //   </li>
        ))}
        </Accordion>
    </div>
  );
};

export default ChatSessionList;
