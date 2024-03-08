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
              <Card className="h-full bg-background border rounded-3xl border-vivid-violet-600 shadow-sm shadow-vivid-violet-800 backdrop-filter backdrop-blur-lg">
                  <CardHeader>{Item.title}</CardHeader>
                  <CardContent >
                  {Item.content}
                  </CardContent>
              </Card>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='border border-vivid-violet-600 shadow-sm shadow-vivid-violet-800 hidden md:flex'/>
      <CarouselNext className='border border-vivid-violet-600 shadow-sm shadow-vivid-violet-800 hidden md:flex'/>
    </Carousel>
  )
}

export default CarouselInfo
