import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { File } from "lucide-react";
import DocViewer from "react-doc-viewer";
const FileViewer = () => {
  const docs = [
    {
      uri: "https://www.transportation.gov/sites/dot.gov/files/docs/maccracken2_Global-Warming.pdf",
    }, 
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge className="gap-2 hover:cursor-pointer">
          <File className="size-5" /> <p>Reference 1</p>
        </Badge>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
        </DialogHeader>
        <DocViewer documents={docs} />
      </DialogContent>
    </Dialog>
  );
};

export default FileViewer;
