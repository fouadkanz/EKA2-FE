

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, ThumbsDown, ThumbsUp, Volume2 } from "lucide-react";

const MessageMenu=()=> {
  return (
    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 flex justify-between">
      <Collapsible>
        <CollapsibleTrigger className="flex flex-row hover:cursor-pointer space-x-2 p-2 hover:bg-gray-300 hover:rounded-md font-semibold">
          3 References <ChevronRight className="pt-[1.5px] size-5" />
        </CollapsibleTrigger>
        <CollapsibleContent className="m-3">
          Reference 1
        </CollapsibleContent>
      </Collapsible>
      <div className="flex flex-row space-x-1">
        <Volume2 className="pt-[1.5px] size-5" />
        <ThumbsDown className="pt-1 size-5" />
        <ThumbsUp className="pt-1 size-5" />
      </div>
    </span>
  );
}

export default MessageMenu;
