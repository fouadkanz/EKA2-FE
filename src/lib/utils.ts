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
    const week = `${date.getFullYear()}-W${Math.ceil(
      (date.getDate() + 6 - date.getDay()) / 7
    )}`;

    if (!weeks[week]) {
      weeks[week] = [];
    }

    weeks[week].push(session);
  });

  return weeks;
};
