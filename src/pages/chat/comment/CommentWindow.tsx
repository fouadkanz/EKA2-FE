import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ArrowRightCircle, Menu } from "lucide-react";
import { FC, ReactNode } from "react";
import { useComment } from "./useComment";
import { useChatSessionContext } from "../core/context/useChatSessionContext";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { Message } from "../MessageList";

export type CommentWindowProps = {
  children: ReactNode;
  id: number;
  thumb: "up" | "down";
  message:Message
};
const CommentWindow: FC<CommentWindowProps> = ({ children, id, thumb,message }) => {
  const { handleThumbsUpDown } = useChatSessionContext();
  const {
    commentType,
    setCommentType,
    commentText,
    setCommentText,
    idealAnswer,
    setIdealAnswer,
    reference,
    setReference,
    options,
    commentTabList,
    toggleComment
  } = useComment();
  return (
    <Dialog key={id}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-row gap-4">
            {commentTabList ? (
              <>
                <ArrowRightCircle
                  className="mb-2 hover:cursor-pointer text-gray-600"
                  onClick={() => toggleComment(message)}
                />{" "}
                Reviews
              </>
            ) : (
              <>
                <Menu
                  className="mb-2 hover:cursor-pointer text-gray-600"
                  onClick={() => toggleComment(message)}
                />{" "}
                Add Review
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        {commentTabList ? (
          <CommentList 
          message={message}
          />
        ) : (
          <>
            <AddComment
              commentType={commentType}
              setCommentType={setCommentType}
              commentText={commentText}
              setCommentText={setCommentText}
              idealAnswer={idealAnswer}
              setIdealAnswer={setIdealAnswer}
              reference={reference}
              setReference={setReference}
              options={options}
              id={id}
              thumb={thumb}
              handleThumbsUpDown={handleThumbsUpDown}
              toggleComment={toggleComment}
              message={message}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CommentWindow;
