import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Message } from "../MessageList";
import { FC } from "react";

interface CommentListProps {
  message: Message;
}


const CommentList:FC<CommentListProps> = ({ message }) => {
  return (
    <div className="bg-[#D9E2EA] p-5 rounded-lg flex flex-row gap-2">
    <div className="flex items-start mb-4">
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <div className="grow">
    {message.thumbsUp && (
      <div className="bg-green-100 p-3 rounded-md mb-2">
        <p><span className="fon">Comment:</span> {message.thumbsUp.comment.comment}</p>
        <p><span className="fon">Ideal Answer:</span> {message.thumbsUp.comment.idealAnswer}</p>
        <p><span className="fon">Type:</span> {message.thumbsUp.comment.type}</p>
        <p><span className="fon">Reference:</span> {message.thumbsUp.comment.reference}</p>
      </div>
    )}
    {message.thumbsDown && (
      <div className="bg-red-100 p-3 rounded-md">
        <p><strong>Comment:</strong> {message.thumbsDown.comment.comment}</p>
        <p><strong>Ideal Answer:</strong> {message.thumbsDown.comment.idealAnswer}</p>
        <p><strong>Type:</strong> {message.thumbsDown.comment.type}</p>
        <p><strong>Reference:</strong> {message.thumbsDown.comment.reference}</p>
      </div>
    )}
    </div>
  </div>
  );
};

export default CommentList;
