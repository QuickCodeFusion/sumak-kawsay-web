import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

interface Item {
  id: number
  title: string
  description: string
  icon: string
}

interface CarouselInfoProps {
  items: Item[]
}

const CarouselInfo = ({ items }: CarouselInfoProps): JSX.Element => {
  return (
  <Carousel className="container  md:w-10/12 lg:w-1/2 ">
      <CarouselContent>
        {items.map((item: Item) => (
        <CarouselItem className='rounded-3xl' key={item.id}>
              <Card className="h-full border border-transparent rounded-3xl shadow-sm backdrop-filter backdrop-blur-lg">
                  <CardHeader className='flex flex-col items-center' >
                  <Image className=' my-4 ring-offset-2 rounded-full' src={item.icon} alt={item.title} width={100} height={100}></Image>
                  <CardTitle className='text-center'>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='w-full text-center text-sm md:text-xl'>{item.description}</CardContent>
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
