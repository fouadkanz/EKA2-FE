import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormGroup from "@/components/ui/formGroup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Menu, SendHorizonalIcon } from "lucide-react";
import { FC, ReactNode } from "react";
import { useComment } from "./useComment";
import { Review } from "../MessageList";
import { Message } from "../ChatWindow";

export type CommentWindowProps = {
  children: ReactNode;
  handleThumbsUpDown: (sessionId: number, isThumbsUp: Review) => void;
  message?:Message
};
const CommentWindow:FC<CommentWindowProps> = ({ children ,handleThumbsUpDown,message}) => {
  const {
    commentType,
    setCommentType,
    commentText,
    setCommentText,
    idealAnswer,
    setIdealAnswer,
    reference,
    setReference,
    options
  } = useComment();

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-row gap-4">
            <Menu className="mb-2" />
            Add Review
          </DialogTitle>
        </DialogHeader>
        <div className="bg-[#D9E2EA] p-5 rounded-lg">
          <FormGroup>
            <Label>Review Type</Label>
            <Select defaultValue={commentType} onValueChange={e=>setCommentType(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select feedback" />
              </SelectTrigger>
              <SelectContent>
                {options.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Comment</Label>
            <Textarea value={commentText} placeholder="Add comment..." onChange={e=>setCommentText(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label>Ideal Answer</Label>
            <Textarea value={idealAnswer} placeholder="Add answer..." onChange={e=>setIdealAnswer(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label>Reference</Label>
            <Input value={reference} placeholder="Add file name..." onChange={e=>setReference(e.target.value)}/>
          </FormGroup>

          <DialogFooter>
            <Button size={"icon"} onClick={()=>handleThumbsUpDown(message?.id,{
              flag:true,
              comment:{
                type: commentType,
                idealAnswer: idealAnswer,
                reference: reference,
                comment: commentText,
              }
            })}>
              <SendHorizonalIcon />
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentWindow;
