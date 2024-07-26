import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ChatSuggestion() {
  return (
    <Carousel className="w-full md:pb-0 pb-2">
      <CarouselPrevious className="relative -top-1 size-6"/>
      <CarouselNext className="relative -top-1 size-6"/>
      <CarouselContent className="md:mx-8 min-h-16 md:gap-2 gap-1">
        <CarouselItem className="md:basis-1/3 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer bg-white">Do you want to summarize this document?</CarouselItem>
        <CarouselItem className="md:basis-1/4 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer bg-white">Would you like me to outline the major points of this document?
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer bg-white">Do you need a brief overview of this document?</CarouselItem>
        <CarouselItem className="md:basis-1/4 basis-2/4 border rounded-lg flex justify-center items-center hover:cursor-pointer bg-white">Can I provide you with the critical points of this document?</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default ChatSuggestion;
