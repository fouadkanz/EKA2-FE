import { ChatSession } from "@/pages/chat/ChatWindow";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const groupSessionsByWeek = (sessions: ChatSession[]|undefined) => {
  const weeks: { [week: string]: ChatSession[] } = {};
if(!sessions){
  return weeks
}
  sessions.forEach(session => {
    const date = new Date(session.id);
    const week = `${date.getMonth()}-Week-${Math.ceil(
      (date.getDate() + 6 - date.getDay()) / 7
    )}`;

    if (!weeks[week]) {
      weeks[week] = [];
    }

    weeks[week].unshift(session);
  });

  return weeks;
};

interface WordObject {
  text: string;
}

export function convertStringToWordObjects(input: string): WordObject[] {
  return input.split(' ').map(word => ({ text: word }));
}

export const convertToMMDDYY=(dateString: string): string=> {
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
      return ''
  }

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);

  return `${month}/${day}/${year}`;
}


export const shortenText=(text: string, maxLength: number): string=> {
  if (text.length <= maxLength) {
      return text;
  }
  return text.slice(0, maxLength - 3) + "...";
}

export const formatDate = (date: Date): string=> {
  const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  };

  return date.toLocaleDateString('en-US', options);
}