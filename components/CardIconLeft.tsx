import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export const CardIconLeft = ({ item }: { item: { title: string, description: string, icon: any } }): JSX.Element => {
  return (
        <Card className='w-80 bg-background rounded-3xl border-vivid-violet-600 shadow-sm shadow-vivid-violet-800 flex flex-col '>
          <CardHeader className='flex flex-row gap-5 items-center' >
            <Image className='ring-2 my-4 ring-offset-2 rounded-full' src={item.icon} alt={item.title} width={50} height={50}></Image>
            <CardTitle className='font-normal text-lg'>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>{item.description}</CardContent>
        </Card>
  )
}
