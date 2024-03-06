import { CardList } from './CardList'
import { CardIconLeft } from './CardIconLeft'

export const InfoCard = (): JSX.Element => {
  const info = [
    { title: 'Holistic Integration', description: 'We merge cutting-edge blockchain and AI technologies with ancient wisdom and sustainable practices to create a self-sufficient ecosystem that nurtures the planet and its inhabitants', icon: '/icon2.jpeg' },
    { title: 'Community-Centric', description: 'At the heart of Sumak Kawsay is our global community. Participation, governance, and shared prosperity are fundamental Each member contributes to and benefits from the ecosystem is growth and sustainability.', icon: '/icon3.jpeg' },
    { title: 'Environmental Regeneration', description: 'Our initiatives and technologies are designed with the Earth in mind. From renewable energy projects to regenerative agriculture, we aim to reverse environmental degradation and promote biodiversity.', icon: '/icon4.jpeg' },
    { title: 'Technological Innovation', description: 'Leveraging blockchain and AI to ensure transparency, security, and efficiency. Our ecosystem empowers individuals and communities with tools and knowledge to foster technological advancements while maintaining ecological balance.', icon: '/icon1.jpeg' },
    { title: 'Inclusive Economic Model', description: 'Our initiatives and technologies are designed with the Earth in mind. From renewable energy projects to regenerative agriculture, we aim to reverse environmental degradation and promote biodiversity.', icon: '/icon5.jpeg' }
  ]
  return (
    <div className='w-full mt-52 gap-10 flex flex-col justify-center items-center'>
      <div className='bg-black/50 w-fit rounded-3xl backdrop-blur-lg flex flex-col justify-center '>
        <h2 className='mb-5 text-3xl text-center font-semibold text-white z-10'> What Is The Sumak Kawsay <em className='bg-gradient-to-r from-orange-600 to-white text-transparent bg-clip-text'>Ecosystem</em>?</h2>
        <p className='w-10/12 text-center mx-auto pb-5'>The Sumak Kawsay Ecosystem is an innovative fusion of technology, ecology, and
          community, providing a forward-thinking solution for contemporary challenges.
        </p>
      </div>
      <CardList >

        {info.map((item, index) => (
          <CardIconLeft key={index} item={item}/>
        ))}
      </CardList>

    </div>

  )
}
