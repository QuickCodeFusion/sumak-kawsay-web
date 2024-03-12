import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
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
                  <CardHeader className='flex flex-col items-center' >
                  <Image className=' my-4 ring-offset-2 rounded-full' src={Item.icon} alt={Item.title} width={100} height={100}></Image>
                  <CardTitle className=''>{Item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='w-full text-center text-xl'>{Item.description}</CardContent>
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
