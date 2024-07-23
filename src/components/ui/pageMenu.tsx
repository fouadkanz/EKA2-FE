import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ChatSessionList, { ChatSessionListProps } from "@/pages/chat/ChatSessionList";
import { MenuIcon } from "lucide-react";

const PageMenu : React.FC<ChatSessionListProps> = ({
    sessions,
    onSelectSession,
    onNewChat,
  }) => {
  return (
    <Sheet>
      <SheetTrigger><MenuIcon /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <ChatSessionList
          sessions={sessions}
          onSelectSession={onSelectSession}
          onNewChat={onNewChat}
          />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default PageMenu;
