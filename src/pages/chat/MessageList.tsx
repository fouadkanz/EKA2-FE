import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ChevronRight,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, [messages]);
  return (
    <div  className="h-[500px] w-full rounded-md p-4 overflow-auto"  ref={scrollRef}>
      {messages.map((message) => (
        <div className="flex items-start gap-1">
          <Avatar className="w-10 h-10 bg-slate-500 rounded-tr-xl">
            <AvatarFallback className="bg-slate-500 rounded-tr-sm text-slate-50">
              CN
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl mb-3">
            <div className="flex items space-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {message.sender}
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-left pl-3">
              {message.text}
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 flex justify-between">
              <div className="flex flex-row hover:cursor-pointer">References <ChevronRight className="pt-1 size-5"/></div>
              <div className="flex flex-row space-x-1">
                <Volume2 className="pt-1 size-5" />
                <ThumbsDown className="pt-1 size-5" />
                <ThumbsUp className="pt-1 size-5" />
              </div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
