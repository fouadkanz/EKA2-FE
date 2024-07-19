import { ChatSession } from "@/pages/chat/ChatWindow";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const groupSessionsByWeek = (sessions: ChatSession[]) => {
  const weeks: { [week: string]: ChatSession[] } = {};

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