import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const CardTeamWork = ({ user }: { user: { name: string, role: string, img: string, description: string } }): React.JSX.Element => {
  return (
    <Card className='md:w-5/6 min-h-96 rounded-3xl border shadow-sm bg-background/50 px-10 py-3 flex flex-col justify-start text-cente'>
      <CardHeader className='flex flex-row m-0 p-0'>
        <div className='w-full flex flex-row h-24'>
          <CardTitle className='flex gap-2 flex-col pt-4'>
            <p className='font-bold text-md'>{user.name}</p>
            <p className='text-sm text-violet-500'>{user.role}</p>
          </CardTitle>
          <div className='relative w-32 h-32 shadow-sm shadow-violet-600 rounded-full overflow-hidden bottom-16 left-10'>
            <Image className='object-cover ' src={user.img} alt={user.name} width={160} height={100}/>
          </div>
        </div>
      </CardHeader>
      <CardContent className='pt-5 flex justify-center items-center text-center self-center font-sans'>{user.description}</CardContent>
    </Card>
  )
}

export default CardTeamWork
