import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { groupSessionsByWeek } from '@/lib/utils'
import { MessageSquare, PlusIcon, Search } from 'lucide-react'
import { ChatSession } from '../ChatWindow'
export interface ChatSessionListProps {
  sessions: ChatSession[];
  onSelectSession: (sessionId: number) => void;
  onNewChat: () => void;
}
const SessionList: React.FC<ChatSessionListProps> = ({
    sessions,
    onSelectSession,
    onNewChat,
  }) => {
    const groupedSessions = groupSessionsByWeek(sessions);
  return (
    <div className='flex flex-col gap-2 w-full'>
      <div className="flex flex-row gap-2">
        <Button
          className="relative md:hover:w-28 flex transition-all duration-300 overflow-hidden"
          onClick={onNewChat}
          size="icon"
          variant={'secondary'}
        >
          <PlusIcon className="size-4" />
        </Button>
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-5 text-muted-foreground" />
          <Input
            className="flex w-full px-3 pl-10"
            placeholder="Search"
          />
        </div>
      </div>
      <Accordion className="rounded-lg w-full" type="multiple">
        {Object.keys(groupedSessions).map((week) => (
          <AccordionItem key={week} value={week} className='w-full'>
            <AccordionTrigger className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'>{week}</AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-1 p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              {groupedSessions[week].map((session) => (
                <div
                  key={session.id}
                  onClick={() => onSelectSession(session.id)}
                  className="flex flex-col gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-md text-slate-800 w-full"
                >
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-1 gap-1">
                      <MessageSquare />
                      Chat Session {session.messages[1]?.text}
                    </div>
                    <span className="font-normal">12:45</span>
                  </div>
                  <span className="opacity-70 font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit.
                  </span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
  </div>
  )
}

export default SessionList