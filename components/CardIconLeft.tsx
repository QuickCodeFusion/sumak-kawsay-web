import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface Item {
  title: string
  description: string
  icon: string
}

interface ItemProps {
  item: Item
}

export const CardIconLeft = ({ item }: ItemProps): JSX.Element => {
  return (
        <Card className='w-80 bg-background rounded-3xl border shadow-sm flex flex-col '>
          <CardHeader className='flex flex-row gap-5 items-center'>
            <Image className=' rounded-full' src={item.icon} alt={item.title} width={70} height={70}></Image>
            <CardTitle className='font-normal text-lg'>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className='text-center'>{item.description}</CardContent>
        </Card>
  )
}
