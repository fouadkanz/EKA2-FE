import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent } from '@/components/ui/tabs'
import { groupSessionsByWeek } from '@/lib/utils'
import { MessageSquare, PlusIcon, Search } from 'lucide-react'
import { ChatSessionListProps } from '../ChatSessionList'

const SessionList: React.FC<ChatSessionListProps> = ({
    sessions,
    onSelectSession,
    onNewChat,
  }) => {
    const groupedSessions = groupSessionsByWeek(sessions);
  return (
    <TabsContent value="chats" className="flex flex-col gap-2">
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
            className="flex w-full px-3 py-1 pl-10"
            placeholder="Search"
          />
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
                  className="flex flex-col gap-1 cursor-pointer p-2 hover:bg-gray-100 rounded-md text-slate-800"
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
  </TabsContent>
  )
}

export default SessionList