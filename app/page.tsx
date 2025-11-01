import TheHeader from "../components/ui/theHeader"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
export default async function page (){

  return (<div className="bg-[#393E46]">
    <TheHeader/>
 
    <Carousel className="w-full max-w-6xl mx-auto my-12 hover:rounded-lg">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-2">
          <Card>
            <CardContent className="flex aspect-square max-w-[150px] max-h-[150px] items-center justify-center p-4">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
  )
}