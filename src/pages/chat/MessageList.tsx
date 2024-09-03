import { FC, useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { convertStringToWordObjects } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Comment } from "react-loader-spinner";
import { ChatSession } from "./ChatWindow";

export interface Comment {
  type: string;
  idealAnswer: string;
  reference: string;
  comment: string;
}
export interface Review {
  flag: boolean;
  comment: Comment;
}
export interface Message {
  id: number;
  text: string;
  sender: "user" | "Emily";
  thumbsDown?: Review;
  thumbsUp?: Review;
}
interface MessageListProps {
  activeSession:ChatSession 
}
const MessageList:FC<MessageListProps> = ({activeSession}) => {

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeSession.messages]);

  return (
    <div
      className="grow w-full rounded-md md:p-4 overflow-auto"
      ref={scrollRef}
    >
      {activeSession.messages.map((message, index) => (
        <div
          key={index}
          className={`${activeSession.messages.length === 1 ? "h-full" : ""}`}
        >
          {activeSession.messages.length === 1 && index === 0 ? (
            <div className="flex justify-start items-center h-full w-full md:p-3">
              <div className="flex items-center md:space-x-4 md:pl-4">
                <Avatar className="w-10 h-10 bg-slate-900 rounded-s-md rounded-b-md">
                  <AvatarFallback className="text-slate-50 text-lg uppercase">
                    {message.sender[0]}
                  </AvatarFallback>
                </Avatar>
                <TypewriterEffect
                  words={convertStringToWordObjects(message.text)}
                />
              </div>
            </div>
          ) : (
            <MessageBubble message={message} index={index} />
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
