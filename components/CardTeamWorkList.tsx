import { Element } from 'react-scroll'
import CardTeamWork from './CardTeamWork'
import { useLanguage } from '@/app/languageProvider'

const CardTeamWorkList = (): React.JSX.Element => {
  const team: {
    name: Record<string, string>
    role: string
    img: string
    description: Record<string, string>
  } =
    {
      name: {
        en: 'Meet the Team Behind the ICO',
        es: 'Conoce al Equipo Detrás de la ICO',
        pt: 'Conheça a Equipe por Trás da ICO'
      },
      role: '',
      img: '/logo.png',
      description: {
        en: "The NGO Hummingbirds, Guardians of the Earth, is the driving force behind the Abya Yala Ecosystem, The non profit organization is registered in the Sierra Nevada de Santa Marta in Colombia, a UNESCO-recognized biosphere reserve and the ancestral home of the Tayrona people. This inspiring region, known as the Heart of the World, forms the foundation of our commitment to serve as humanity's blueprint for a sustainable furture, promoting a balance between nature and culture. Our work in biodiversity, food sovereignty, and sustainable land management is a living testament to this profound legacy.",
        es: 'La ONG Colibríes, Guardianes de la Tierra, es la fuerza impulsora detrás del Ecosistema Abya Yala. La organización sin fines de lucro está registrada en la Sierra Nevada de Santa Marta en Colombia, una reserva de la biosfera reconocida por la UNESCO y el hogar ancestral del pueblo Tayrona. Esta inspiradora región, conocida como el Corazón del Mundo, forma la base de nuestro compromiso de servir como modelo de la humanidad para un futuro sostenible, promoviendo un equilibrio entre la naturaleza y la cultura. Nuestro trabajo en biodiversidad, soberanía alimentaria y gestión sostenible de la tierra es un testimonio vivo de este profundo legado.',
        pt: 'A ONG Hummingbirds, Guardians of the Earth, é a força motriz por trás do Ecossistema Abya Yala. A organização sem fins lucrativos está registrada na Sierra Nevada de Santa Marta, na Colômbia, uma reserva da biosfera reconhecida pela UNESCO e lar ancestral do povo Tayrona. Esta região inspiradora, conhecida como o Coração do Mundo, constitui a base do nosso compromisso de servir como modelo da humanidade para um futuro sustentável, promovendo um equilíbrio entre natureza e cultura. O nosso trabalho em matéria de biodiversidade, soberania alimentar e gestão sustentável da terra é um testemunho vivo deste profundo legado.'
      }
    }

  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: 'Our Team',
    es: 'Nuestro equipo',
    pt: 'Nossa equipe'
  }

  return (
    <Element name="teamWork" className="w-full hidden">
      <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-3xl font-bold">{title[language]}</h1>
          <div className="flex items-center justify-center">
            <div className="md:w-4/5">
              <CardTeamWork user={{
                name: team.name[language],
                role: team.role,
                img: team.img,
                description: team.description[language]
              }} />
            </div>
          </div>
        </div>
    </Element>

  )
}

export default CardTeamWorkList
