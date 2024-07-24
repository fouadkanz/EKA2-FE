// src/Typewriter.tsx
import React, { Dispatch, SetStateAction, useState,useEffect } from 'react';

type SetUserTyping = Dispatch<SetStateAction<boolean>>;
interface TypewriterProps {
  text: string;
  speed?: number; // Optional prop to control typing speed
  userTyping:boolean,
  setLoading:SetUserTyping
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, setLoading }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) {
        setLoading(false)
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);
  return <div className="text-sm">{displayedText.split("undefined")[0]}</div>;
};

export default Typewriter;
