import React, { useState } from "react";
import { Mic, Plus, Video, Camera, SendHorizontal } from "lucide-react";
import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submit?: (event: React.FormEvent) => void;
  onFileDrop: (files: FileList) => void;
}
const ChatInput: React.FC<InputProps> = ({
  placeholder = "Ask me something...",
  value,
  onChange,
  submit,
  onFileDrop,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragOver, setDragOver] = useState(false);
  const [isDropped, setDropped] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && submit) {
      e.preventDefault();
      submit(e as unknown as React.FormEvent);
    }
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files.length > 0) {
      onFileDrop(event.dataTransfer.files);
    }
    setIsHovered(false);
    setDragOver(false);
    setDropped(!isDropped);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(false);
  };
  return (
    <div
      className={`flex items-center border rounded-full shadow-sm h-15 ${
        isHovered ? "pl-4" : ""
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {isDragOver ? (
        <div className="w-full h-10 rounded-full m-2 bg-[#9FA6AF] text-center p-2">
          Drag your file(s) to start uploading
        </div>
      ) : (
        <>
          <div
            className="relative mr-2 p-2 rounded-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                isHovered
                  ? "translate-x-12 opacity-0"
                  : "translate-x-0 opacity-100"
              } flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full`}
            >
              <Plus />
            </div>
            <div
              className={`absolute top-3 left-0 flex items-center space-x-2 transition-opacity duration-300 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="group">
                <Video
                  className="w-8 h-8 cursor-pointer rounded-full p-1 group-hover:bg-gray-200 transition-all duration-300 ease-in-out"
                  onClick={() => console.log("Video icon")}
                />
              </div>
              <div className="group">
                <Camera
                  className="w-8 h-8 cursor-pointer rounded-full p-1 group-hover:bg-gray-200 transition-all duration-300 ease-in-out"
                  onClick={() => console.log("Camera icon")}
                />
              </div>
            </div>
          </div>
       
          <Input
            type="text"
            className="flex-grow ml-6 border-none focus:"
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
            <div
              className="flex items-center justify-center w-10 h-10 bg-[#334155] rounded-full hover:bg-[#49586d]"
              onClick={submit}
            >
              <SendHorizontal className="w-6 h-6 text-white" />
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default ChatInput;
