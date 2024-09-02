import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  ChevronRight,
  ChevronsRight,
  ChevronsUp,
  ChevronsUpDown,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import CommentWindow from "./comment/CommentWindow";

import { FC, useState } from "react";
import { Message } from "./MessageList";
import "@cyntler/react-doc-viewer/dist/index.css";
import FileViewer from "./FileViewer";

interface MessageMenuProps {
  message: Message;
}
const MessageMenu: FC<MessageMenuProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-sm font-normal text-gray-500 dark:text-gray-400 flex justify-between">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex flex-row hover:cursor-pointer space-x-2 p-2 hover:bg-gray-300 hover:rounded-md font-semibold">
          <span>3 References</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 pt-1" />
          ) : (
            <ChevronRight className="h-4 w-4 pt-1" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-wrap gap-1 ml-2 mt-2">
        <FileViewer />
        <FileViewer />
        </CollapsibleContent>
      </Collapsible>
      <div className="relative right-0">
        <div className="flex space-x-2">
          <Volume2 className="size-[20px] hover:fill-[#334155] hover:cursor-pointer mb-1.4" />
          <CommentWindow message={message} id={message.id} thumb={"down"}>
            <ThumbsDown
              className={`${
                message?.thumbsDown?.flag ? "fill-[#334155] text-[#334155]" : ""
              } size-[18px] hover:fill-[#334155]`}
            />
          </CommentWindow>
          <CommentWindow message={message} id={message.id} thumb={"up"}>
            <ThumbsUp
              className={`${
                message?.thumbsUp?.flag ? "fill-[#334155] text-[#334155]" : ""
              } size-[18px] hover:fill-[#334155]`}
            />
          </CommentWindow>
        </div>
      </div>
    </div>
  );
};

export default MessageMenu;
