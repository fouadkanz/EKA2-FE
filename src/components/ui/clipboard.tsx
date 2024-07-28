import { ClipboardCheck, ClipboardIcon } from "lucide-react";
import React, { useState } from "react";
interface ClipboardProps {
  text: string;
}

const Clipboard: React.FC<ClipboardProps> = ({ text }) => {
  const [message, setMessage] = useState<string>("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMessage("Copied to clipboard!");
        setTimeout(() => setMessage(""), 2000); // Clear the message after 2 seconds
      })
      .catch(() => {
        setMessage("Failed to copy!");
      });
  };

  return (
    <div>
      {message ? (
        <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600">
          <ClipboardCheck className="text-gray-500 size-[18px]" />
        </button>
      ) : (
        <button
          className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
        >
          <ClipboardIcon
            className="cursor-pointer text-gray-500 size-[18px]"
            onClick={copyToClipboard}
          ></ClipboardIcon>
        </button>
      )}
    </div>
  );
};

export default Clipboard;
