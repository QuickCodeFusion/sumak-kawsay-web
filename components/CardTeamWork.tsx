import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const CardTeamWork = ({ user }: { user: { name: string, role: string, img: string, description: string } }): React.JSX.Element => {
  return (
    <Card className='rounded-3xl shadow-sm px-4 text-center py-3 flex flex-col justify-start text-cente'>
      <CardHeader className='flex justify-center flex-row m-0 p-4'>
          <CardTitle className='flex ml-4 text-center'>
              {user.name}
          </CardTitle>
      </CardHeader>
      <CardContent className='flex pt-5 font-sans'>
        {user.description}
      </CardContent>
    </Card>
  )
}

export default CardTeamWork
