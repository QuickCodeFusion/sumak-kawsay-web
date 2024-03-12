import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const CardTeamWork = ({ user }: { user: { name: string, role: string, img: string, description: string } }): React.JSX.Element => {
  return (
    <Card className='rounded-3xl shadow-sm bg-background/50 px-4 text-center py-3 flex flex-col justify-start text-cente'>
      <CardHeader className='flex flex-row m-0 p-0'>
          <CardTitle className='flex gap-2 ml-6 w-full items-center my-4'>
            <Image src={user.img} alt={user.name} width={66} height={66}/>
              {user.name}
          </CardTitle>
      </CardHeader>
      <CardContent className='flex pt-5 font-sans'>
        {user.description}
      <Image src="/colibrie.png" alt="logo" width={300} height={300}/>
      </CardContent>
    </Card>
  )
}

export default CardTeamWork
