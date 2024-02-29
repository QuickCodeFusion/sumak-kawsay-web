import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const CarouselInfo = ({ Item }: { Item: any }): JSX.Element => {
  return (
  <Carousel className="w-7/12 md:w-1/2">
    <CarouselContent >
        {Item.map((Item: any) => (
        <CarouselItem key={Item.id}>
            <div className="p-1 h-full flex items-center">
              <Card className="h-full bg-amber-700/50  backdrop-filter backdrop-blur-lg border-none">
                  <CardHeader>{Item.title}</CardHeader>
                  <CardContent >
                  {Item.content}
                  </CardContent>
              </Card>
            </div>
        </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default CarouselInfo
