import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export const CardWithIcon = ({ item }: { item: { title: string, description: string, icon: any } }): JSX.Element => {
  return (
        <Card className='rounded-3xl bg-sky-100/50 px-10 py-3 flex flex-col justify-center items-center text-center '>
          <CardHeader >
            <Image className='ring-8 my-4 ring-offset-2 rounded-full' src={item.icon} alt={item.title} width={100} height={100}></Image>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>{item.description}</CardContent>
        </Card>
  )
}
