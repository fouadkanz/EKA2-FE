import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import ChatSessionList from "@/pages/chat/ChatSessionList";
import { MenuIcon } from "lucide-react";
import { Config } from "@/lib/configLoader";
interface PageMenuTypeProps {
    config:Config
}
const PageMenu : React.FC<PageMenuTypeProps> = ({
    config
  }) => {

  return (
    <Sheet>
      <SheetTrigger><MenuIcon /></SheetTrigger>
      <SheetContent className="overflow-hidden h-screen">
        <SheetHeader>
          <ChatSessionList
          config={config}
          />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default PageMenu;
