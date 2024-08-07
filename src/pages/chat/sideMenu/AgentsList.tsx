import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { BotIcon, Search, SortDesc } from "lucide-react";

function AgentsList() {
  const agentList = [
    {
      id: crypto.randomUUID(),
      name: "Jenna",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: crypto.randomUUID(),
      name: "Emily",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: crypto.randomUUID(),
      name: "Sylvia",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: crypto.randomUUID(),
      name: "Bailey",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <TabsContent value="agents" className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
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
          <Input className="flex w-full px-3 py-1 pl-10" placeholder="Search" />
        </div>
      </div>
      {agentList.map((agent) => (
        <div
          key={agent.id}
          className="flex flex-col gap-1 cursor-pointer p-2 hover:bg-gray-100 rounded-md text-slate-800"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-1 gap-1">
              <BotIcon />
              {agent.name}
            </div>
          </div>
          <span className="opacity-70 font-light">{agent.description}</span>
        </div>
      ))}
    </TabsContent>
  );
}

export default AgentsList;
