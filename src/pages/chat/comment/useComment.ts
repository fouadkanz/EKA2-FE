import { useState } from "react";

export function useComment(){
    const [commentType, setCommentType] = useState('');
    const [commentText, setCommentText] = useState('');
    const [idealAnswer, setIdealAnswer] = useState('');
    const [reference, setReference] = useState('');
    const options = ["Wrong information","Inappropriate answer","Difficult to read/understand","Other"]

    return {
        commentType,
        setCommentType,
        commentText,
        setCommentText,
        idealAnswer,
        setIdealAnswer,
        reference,
        setReference,
        options
    }
}