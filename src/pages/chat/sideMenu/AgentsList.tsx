import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TabsContent } from '@/components/ui/tabs'
import { BotIcon, Search, SortDesc } from 'lucide-react'

function AgentsList() {
  return (
    <TabsContent value="agents" className="flex flex-col gap-2">
    <div  className="flex flex-row gap-2">
          <Button
            className="flex transition-all duration-300 overflow-hidden"
            size="icon"
            variant={"secondary"}
          >
            <SortDesc className="size-4" />
            {/* <span>
        Add topic
      </span> */}
          </Button>
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-5 text-muted-foreground" />
            <Input
              className="flex w-full px-3 py-1 pl-10"
              placeholder="Search"
            />
          </div>
        </div>
      <div className="flex flex-col gap-1 cursor-pointer p-2 hover:bg-gray-100 rounded-md text-slate-800">
        <div className="flex flex-row justify-between">
          <div className="flex flex-1 gap-1">
            <BotIcon />
            Agent name
          </div>
          <span className="font-normal">12:45</span>
        </div>
        <span className="opacity-70 font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </TabsContent>
  )
}

export default AgentsList