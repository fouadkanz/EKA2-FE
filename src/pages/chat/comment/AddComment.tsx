import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import FormGroup from '@/components/ui/formGroup'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { SendHorizonalIcon } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Message, Review } from '../MessageList'
type StringState = Dispatch<SetStateAction<string>>
interface AddCommentProps{
    id:number,
    thumb:"up"|"down",
    setReference:StringState,
    handleThumbsUpDown:(messageID: number|undefined, isThumbsUp: Review,direction:"up" | "down") => boolean;
    commentText:string,
    commentType:string,
    setCommentType:StringState,
    options:string[],
    setCommentText:StringState,
    idealAnswer:string,
    setIdealAnswer:StringState,
    reference:string,
    toggleComment:(message: Message) => void,
    message:Message
}
const AddComment:FC<AddCommentProps>=({id,thumb,toggleComment,message,setReference,handleThumbsUpDown,commentText,commentType,setCommentType,options,setCommentText,idealAnswer,setIdealAnswer,reference})=> {
  return (
    <div className="bg-[#D9E2EA] p-5 rounded-lg">
    <FormGroup>
      <Label>Review Type</Label>
      <Select
        defaultValue={commentType}
        onValueChange={(e) => setCommentType(e)}
      >
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
      <Textarea
        value={commentText}
        placeholder="Add comment..."
        onChange={(e) => setCommentText(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <Label>Ideal Answer</Label>
      <Textarea
        value={idealAnswer}
        placeholder="Add answer..."
        onChange={(e) => setIdealAnswer(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <Label>Reference</Label>
      <Input
        value={reference}
        placeholder="Add file name..."
        onChange={(e) => setReference(e.target.value)}
      />
    </FormGroup>

    <DialogFooter>
      <Button
        size={"icon"}
        onClick={() =>{
          handleThumbsUpDown(
            id,
            {
              flag: true,
              comment: {
                type: commentType,
                idealAnswer: idealAnswer,
                reference: reference,
                comment: commentText,
              },
            },
            thumb
          ) ? toggleComment(message) : false}
        }
      >
        <SendHorizonalIcon />
      </Button>
    </DialogFooter>
  </div>
  )
}

export default AddComment
