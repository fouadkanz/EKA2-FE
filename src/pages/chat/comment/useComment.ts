import { useState } from "react";
import {  Message } from "../MessageList";

export function useComment(){
    const [commentType, setCommentType] = useState('');
    const [commentText, setCommentText] = useState('');
    const [idealAnswer, setIdealAnswer] = useState('');
    const [reference, setReference] = useState('');
    const [commentTabList,setCommentTabList] = useState(false)
    const options = ["Wrong information","Inappropriate answer","Difficult to read/understand","Other"]
const toggleComment=(message:Message)=>{
    if(message.thumbsDown || message.thumbsDown) setCommentTabList(!commentTabList)
}
    return {
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
        setCommentTabList,
        toggleComment
    }
}