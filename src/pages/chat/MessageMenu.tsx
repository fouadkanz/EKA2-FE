import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, ThumbsDown, ThumbsUp, Volume2 } from "lucide-react";
import CommentWindow from "./comment/CommentWindow";
import { FC } from "react";
import { Message, Review } from "./MessageList";
interface MessageMenuProps {
  message:Message,
  handleThumbsUpDown: (sessionId: number, isThumbsUp: Review) => void;
}
const MessageMenu:FC<MessageMenuProps> = ({message,handleThumbsUpDown}) => {
  return (
    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 flex justify-between">
      <Collapsible>
        <CollapsibleTrigger className="flex flex-row hover:cursor-pointer space-x-2 p-2 hover:bg-gray-300 hover:rounded-md font-semibold">
          3 References <ChevronRight className="pt-[1.5px] size-5" />
        </CollapsibleTrigger>
        <CollapsibleContent className="m-3">Reference 1</CollapsibleContent>
      </Collapsible>
      <div className="flex flex-row space-x-2">
        <Volume2 className="mt-2 size-[20px]" />
        <CommentWindow handleThumbsUpDown={handleThumbsUpDown}>
          <ThumbsDown className={`${message?.thumbsDown?.flag ? "fill-[#334155]" : ""} mt-1 size-[18px] hover:fill-[#334155]`} />
        </CommentWindow>
        <CommentWindow handleThumbsUpDown={handleThumbsUpDown} message={message}>
          <ThumbsUp className={`${message?.thumbsUp?.flag ? "fill-[#334155]" : ""} mt-1 size-[18px] hover:fill-[#334155]`} />
        </CommentWindow>
      </div>
    </span>
  );
};

export default MessageMenu;
