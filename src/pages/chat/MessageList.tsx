import React, { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import {
  TypewriterEffect} from "@/components/ui/typewriter-effect";
import { convertStringToWordObjects } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface Message {
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
    <div
      className="md:h-[775px] h-[580px] w-full rounded-md p-4 overflow-auto"
      ref={scrollRef}
    >
      {messages.map((message, index) => (
        <>
          {messages.length === 1 && index === 0 ? (
            <>
              <div className="flex flex-col justify-center h-full">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 bg-slate-900 rounded-md mt-[5.5px]">
                    <AvatarFallback className="text-slate-50">
                      {message.sender}
                    </AvatarFallback>
                  </Avatar>
                  <TypewriterEffect
                    words={convertStringToWordObjects(message.text)}
                  />
                </div>
              </div>
            </>
          ) : (
            <MessageBubble
              message={message}
              index={index}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default MessageList;
