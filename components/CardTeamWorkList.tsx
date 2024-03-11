import { Element } from 'react-scroll'
import CardTeamWork from './CardTeamWork'

const CardTeamWorkList = (): React.JSX.Element => {
  const user = [
    {
      name: 'Diego Alvarado',
      role: 'founder',
      img: '/logo.png',
      description: 'A global entrepreneur and advocate for planetary well-being. His journey through diverse cultures and partnerships with indigenous tribes has ignited the Sumak Kawsay Ecosystem—a blend of blockchain innovation and ancient wisdom. With a powerful mission at heart, to inspire global communities to forge a more balanced and thriving world.'
    },
    {
      name: 'Maya Singh',
      role: 'Chief Sustainability Officer',
      img: '/logo.png',
      description: 'Maya Singh is a renowned environmental scientist and policy advocate with overa decade of experience in sustainable development and renewable energy solutions.Her work with international NGOs and her contributions to groundbreaking researchin sustainable practices have positioned her as a leading voice in ecologicalpreservation. Maya brings a wealth of knowledge in integrating environmental sciencewith local wisdom to create scalable, sustainable ecosystems. Her passion forempowering communities aligns with the Sumak Kawsay mission, driving innovativesolutions for a balanced relationship between humanity and the natural world.'
    },
    {
      name: 'Alex Rivera',
      role: 'Chief Technology Officer',
      img: '/logo.png',
      description: 'Alex Rivera is a visionary in the field of blockchain technology and artificialintelligence. With a background in software engineering and a deep commitment tousing technology for social good, Alex has led several successful tech startupsfocused on environmental and social impact. His expertise lies in developingscalable, secure, and transparent systems that leverage technology to enhancecommunity governance, resource management, and global connectivity. Alex’sinnovative approach to technological solutions forms the backbone of the SumakKawsay Ecosystem’s infrastructure, ensuring it is resilient, inclusive, andforward-thinking.'
    }
  ]
  return (
    <Element name='teamWork' className='w-full my-20 py-20'>
      <div className='flex flex-col gap-20 text-center'>
        <h1 className='text-3xl font-bold'>Our Team</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 p-4 md:p-0'>
          {user.map((user) => (
            <div key={user.name} className="flex justify-center">
              <CardTeamWork user={user} />
            </div>
          ))}
        </div>
      </div>
    </Element>

  )
}

export default CardTeamWorkList
