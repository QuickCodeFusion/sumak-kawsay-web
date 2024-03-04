import { Element } from 'react-scroll'
import CardTeamWork from './CardTeamWork'

const CardTeamWorkList = (): React.JSX.Element => {
  const user = [
    {
      name: 'Diego Pepe',
      role: 'CMO',
      img: '/jefe.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Diego Pepe',
      role: 'CMO',
      img: '/jefe.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Diego Pepe',
      role: 'CMO',
      img: '/jefe.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
  return (
        <Element name='teamWork'>
          <h1 className='text-3xl font-bold text-amber-500'>Team Work</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 p-4 md:p-0 gap-20 mt-4'>
            {
              user.map((user) => (
                  <CardTeamWork user={user} key={user.name}/>
              ))
            }
          </div>
        </Element>

  )
}

export default CardTeamWorkList
