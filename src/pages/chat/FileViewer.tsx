import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import DocViewer from "@cyntler/react-doc-viewer";
import PdfLogo from "@/assets/pdfLogo.png";

const pdfUrl =
  "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf";

const FileViewer = () => {
  const docs = [
    {
      uri: pdfUrl,
      fileType: "pdf",
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="gap-2 hover:cursor-pointer text-xs flex justify-between text-[#636161] bg-[#D9D9D9] py-1 px-3 rounded-lg">
          <img src={PdfLogo} alt="Pdf logo" className="size-[24px]" />
          <p className="p-[3.5px] capitalize font-semibold">Reference 1</p>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-auto md:max-w-screen-md max-w-screen-sm">
        <DialogHeader></DialogHeader>
        <DocViewer
          documents={docs}
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
