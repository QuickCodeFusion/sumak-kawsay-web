import { CardList } from './CardList'
import { CardIconLeft } from './CardIconLeft'

export const InfoCard = (): JSX.Element => {
  const info = [
    { title: 'Holistic Integration', description: 'We merge cutting-edge blockchain and AI technologies with ancient wisdom and sustainable practices to create a self-sufficient ecosystem that nurtures the planet and its inhabitants', icon: '/sumak.png' },
    { title: 'Community-Centric', description: 'At the heart of Sumak Kawsay is our global community. Participation, governance, and shared prosperity are fundamental Each member contributes to and benefits from the ecosystem is growth and sustainability.', icon: '/sumak2.png' },
    { title: 'Environmental Regeneration', description: 'Our initiatives and technologies are designed with the Earth in mind. From renewable energy projects to regenerative agriculture, we aim to reverse environmental degradation and promote biodiversity.', icon: '/sumak3.png' },
    { title: 'Technological Innovation', description: 'Leveraging blockchain and AI to ensure transparency, security, and efficiency. Our ecosystem empowers individuals and communities with tools and knowledge to foster technological advancements while maintaining ecological balance.', icon: '/sumak4.png' }
    /* { title: 'Inclusive Economic Model', description: 'Our initiatives and technologies are designed with the Earth in mind. From renewable energy projects to regenerative agriculture, we aim to reverse environmental degradation and promote biodiversity.', icon: '/sumak5.png' } */
  ]
  return (
    <div className='w-full mt-52 pt-12 gap-10 flex flex-col justify-center items-center'>
        <h2 className='text-3xl text-center font-semibold z-10'> What Is The Sumak Kawsay <em className='bg-gradient-to-r from-azure-radiance-600 to-white text-transparent bg-clip-text'>Ecosystem</em>?</h2>
        <p className='w-10/12 text-center mx-auto pb-5'>The Sumak Kawsay Ecosystem is an innovative fusion of technology, ecology, and
          community, providing a forward-thinking solution for contemporary challenges.
        </p>
      <CardList >

        {info.map((item, index) => (
          <CardIconLeft key={index} item={item}/>
        ))}
      </CardList>

    </div>

  )
}
