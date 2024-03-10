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
  <Carousel className="container  w-full md:w-1/2 ">
      <CarouselContent>
        {Item.map((Item: any) => (
        <CarouselItem className='rounded-3xl' key={Item.id}>
              <Card className="h-full bg-background/50 border rounded-3xl shadow-sm backdrop-filter backdrop-blur-lg">
                  <CardHeader>{Item.title}</CardHeader>
                  <CardContent >
                  {Item.content}
                  </CardContent>
              </Card>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='border shadow-s hidden md:flex'/>
      <CarouselNext className='borde shadow-sm hidden md:flex'/>
    </Carousel>
  )
}

export default CarouselInfo
