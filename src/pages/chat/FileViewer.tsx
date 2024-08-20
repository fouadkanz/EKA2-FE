import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { File } from "lucide-react";
import DocViewer from "@cyntler/react-doc-viewer";

const pdfUrl = 'https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf';

const FileViewer = () => {
  const docs = [
    {
      uri: pdfUrl,
      fileType: "pdf"
    }, 
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge className="gap-2 hover:cursor-pointer text-xs">
          <File className="size-5" /> <p>Reference 1</p>
        </Badge>
      </DialogTrigger>
      <DialogContent className="overflow-auto md:max-w-screen-md max-w-screen-sm">
        <DialogHeader>
        </DialogHeader>
        <DocViewer documents={docs}
         config={{
          header: {
            disableHeader: true,
            disableFileName: false,
            retainURLParams: false,
          },  
        }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FileViewer;
