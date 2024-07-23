import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ChatSuggestion() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="ml-8 mr-8 min-h-16 gap-2">
        <CarouselItem className="md:basis-1/3 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer">Do you want to summarize this document?</CarouselItem>
        <CarouselItem className="md:basis-1/4 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer">Would you like me to outline the major points of this document?
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer">Do you need a brief overview of this document?</CarouselItem>
        <CarouselItem className="md:basis-1/4 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer">Can I provide you with the critical points of this document?</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="relative -top-20 size-6"/>
      <CarouselNext className="relative -top-20 size-6"/>
    </Carousel>
  );
}

export default ChatSuggestion;
