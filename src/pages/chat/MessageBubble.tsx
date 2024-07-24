import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clipboard } from "lucide-react";
import React, { useState } from "react";
import MessageMenu from "./MessageMenu";
import { Message } from "./MessageList";
import Typewriter from "@/components/ui/typeWriter";
import { Comment } from "react-loader-spinner";

interface MessageBubbleProps {
  message: Message;
  index: number;
  setLoading: any;
  isLoading:Boolean
}
const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  index,
  setLoading,
  isLoading
}) => {
  const [userTyping, setUserTyping] = useState(false);
  return (
    <div className="flex items-start gap-1 space-x-1">
      <Avatar className="w-10 h-10 bg-slate-900 rounded-md">
        <AvatarFallback className=" text-slate-50">CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl mb-3">
        <div className="flex items justify-between">
          <span className="flex space-x-3">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {message.sender}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </span>
          {index !== 0 && message.sender !== "user" && (
            <span>
              <Clipboard className="text-gray-500 size-[18px]" />
            </span>
          )}
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-left pl-3">
          {index === 0 ? (
            message.text
          ) : (
            <>
              {message.sender === "ai" ? (
                <Typewriter
                  userTyping={userTyping}
                  setLoading={setLoading}
                  text={message.text}
                  speed={20}
                />
              ) : (
                message.text
              )}
            </>
          )}
        </p>
        {index !== 0 && message.sender !== "user" && <MessageMenu />}
      </div>
    </div>
  );
};

export default MessageBubble;
