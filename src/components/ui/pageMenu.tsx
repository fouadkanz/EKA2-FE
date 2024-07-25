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
import { Config } from "@/lib/configLoader";
interface PageMenuTypeProps {
    config:Config
}
const PageMenu : React.FC<ChatSessionListProps&PageMenuTypeProps> = ({
    sessions,
    onSelectSession,
    onNewChat,
    config
  }) => {
  return (
    <Sheet>
      <SheetTrigger><MenuIcon /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <ChatSessionList
          config={config}
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
