import React, { Fragment, useRef, useState } from "react";
import {
  Mic,
  Plus,
  Video,
  Camera,
  SendHorizontal,
  X,
  Paperclip,
} from "lucide-react";
import { Badge } from "./badge";
import { Textarea } from "./textarea";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submit?: (event: React.FormEvent) => void;
}
interface FilePros {
  name: string;
  type: string;
  size: number;
}
const ChatInput: React.FC<TextareaProps> = ({
  placeholder = "Ask me something...",
  value,
  onChange,
  submit,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragOver, setDragOver] = useState(false);
  const [isDropped, setDropped] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<FilePros[]>([]);
  const handleFileDrop = (files: FileList) => {
    const newFiles: FilePros[] = attachedFiles;
    for (let index = 0; index < files.length; index++) {
      newFiles.push({
        name: files[index].name,
        size: files[index].size,
        type: files[index].type,
      });
    }
    setAttachedFiles(newFiles);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && submit && !e.shiftKey) {
      e.preventDefault();
      submit(e as unknown as React.FormEvent);
    }
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files.length > 0) {
      handleFileDrop(event.dataTransfer.files);
    }
    setIsHovered(false);
    setDragOver(false);
    setDropped(true);
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
  const handleClearFiles = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(false);
    setDropped(false);
    setDragOver(false);
    setAttachedFiles([]);
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttacheDocument = () => {
    if(fileInputRef.current){
      setDropped(false)
      fileInputRef.current.click();
    }  
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if( files){
      const newFiles: FilePros[] = attachedFiles;
      for (let index = 0; index < files.length; index++) {
        newFiles.push({
          name: files[index].name,
          size: files[index].size,
          type: files[index].type,
        });
      }
      setDropped(true)
      setAttachedFiles(newFiles);
    }
  }
  return (
    <Fragment>
      {isDropped && (
        <div className="flex justify-between">
          <div className="flex flex-row flex-wrap space-x-1">
            {attachedFiles?.map((file) => (
              <span key={file.name} className="relative bg-slate-600 font-bold p-1 w-fit rounded-full mb-1  ml-2 text-white">
                {file.name}
              </span>
            ))}
          </div>
          <Badge
            variant={"secondary"}
            className="hover:cursor-pointer p-1 h-fit mb-1 w-16 flex gap-2 font-bold"
            onClick={handleClearFiles}
          >
          <X className="size-3 font-bold"/><span>clear</span>  
          </Badge>
        </div>
      )}
      <div
        className={`flex items-center border rounded-full shadow-sm h-auto ${
          isHovered ? "pl-4" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {isDragOver ? (
          <div className="w-full h-10 rounded-lg m-2 bg-[#9FA6AF] text-center p-2">
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
            <div
              className={`text-gray-500 hover:cursor-pointer ${isHovered ? 'pl-4' : ''}`}
              onClick={handleAttacheDocument}
            >
              <Paperclip />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
            <Textarea
              className="flex-grow border-none resize-none mt-3 rounded-lg"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              rows={2} 
            />
            <div className="group ml-2 p-2 rounded-full">
              <span className="sr-only">Voice</span>
              <Mic className="w-8 h-8 cursor-pointer rounded-full p-1 group-hover:bg-gray-200 transition-all duration-300 ease-in-out" />
            </div>
            <button className="ml-2 p-2 rounded-full" type="button" onClick={submit}>
              <span className="sr-only">Send</span>
              <div
                className="flex items-center justify-center w-10 h-10 bg-[#334155] rounded-full hover:bg-[#49586d]"
              >
                <SendHorizontal className="w-6 h-6 text-white" />
              </div>
            </button>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default ChatInput;
