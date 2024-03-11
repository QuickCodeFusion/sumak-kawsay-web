import { Element } from 'react-scroll'
import CardTeamWork from './CardTeamWork'

const CardTeamWorkList = (): React.JSX.Element => {
  const team =
    {
      name: 'Meet the Team Behind the ICO',
      role: '',
      img: '/logo.png',
      description: 'The NGO Hummingbirds, Guardians of the Earth, is the driving force behind the Sumak Kawsay Ecosystem, The non profit organization is registered in the Sierra Nevada de Santa Marta in Colombia, a UNESCO-recognized biosphere reserve and the ancestral home of the Tayrona people. This inspiring region, known as the Heart of the World, forms the foundation of our commitment to serve as humanity\'s blueprint for a sustainable furture, promoting a balance between nature and culture. Our work in biodiversity, food sovereignty, and sustainable land management is a living testament to this profound legacy.'
    }

  return (
    <Element name="teamWork" className="w-full my-20 py-20">
      <div className="flex flex-col gap-20 text-center">
          <h1 className="text-3xl font-bold">Our Team</h1>
          <div className="p-4 md:p-0 flex justify-center">
            <div className="lg:w-1/3">
              <CardTeamWork user={team} />
            </div>
          </div>
        </div>
    </Element>

  )
}

export default CardTeamWorkList
