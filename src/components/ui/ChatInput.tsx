import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Mic, Plus, Video, Camera, SendHorizontal } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submit?: (event: React.FormEvent) => void;

}
 
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex-grow bg-transparent outline-none placeholder-gray-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
 
const ChatInput: React.FC<InputProps> = ({
  placeholder = "Ask me something...",
  value,
  onChange,
  submit,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && submit) {
      e.preventDefault();
      submit(e as unknown as React.FormEvent);
    }
  };



  return (
    <div className={`flex items-center border rounded-full shadow-sm ${
            isHovered ? 'pl-4' : ''
          }`}>
      <div
        className="relative mr-2 p-2 rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="sr-only">Attach</span>
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            isHovered ? 'translate-x-12 opacity-0' : 'translate-x-0 opacity-100'
          } flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full`}
        >
          <Plus />
        </div>
        <div
          className={`absolute top-3 left-0 flex items-center space-x-2 transition-opacity duration-300 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="group">
            <Video className="w-8 h-8 cursor-pointer rounded-full p-1 group-hover:bg-gray-200 transition-all duration-300 ease-in-out" onClick={() => console.log("Video icon")} />
          </div>
          <div className="group">
            <Camera className="w-8 h-8 cursor-pointer rounded-full p-1 group-hover:bg-gray-200 transition-all duration-300 ease-in-out" onClick={() => console.log("Camera icon")} />
          </div>
        </div>
      </div>
      <Input
        type="text"
        className="flex-grow ml-6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}  
      />
      <div className="group ml-2 p-2 rounded-full">
        <span className="sr-only">Voice</span>
        <Mic className="w-8 h-8 cursor-pointer rounded-full p-1 group-hover:bg-gray-200 transition-all duration-300 ease-in-out" />
      </div>
      <button className="ml-2 p-2 rounded-full">
        <span className="sr-only">Send</span>
        <div className="flex items-center justify-center w-10 h-10 bg-[#334155] rounded-full hover:bg-[#49586d]" onClick={submit}>
          <SendHorizontal className="w-6 h-6 text-white" />
        </div>
      </button>
    </div>
  );
};

export default ChatInput;


 