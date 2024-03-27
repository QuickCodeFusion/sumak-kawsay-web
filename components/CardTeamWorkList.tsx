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
        en: 'The NGO Hummingbirds, Guardians of the Earth, is the driving force behind the Sumak Kawsay Ecosystem.',
        es: 'La ONG Colibríes, Guardianes de la Tierra, es la fuerza impulsora detrás del Ecosistema Sumak Kawsay.',
        pt: 'A ONG Beija-flores, Guardiães da Terra, é a força motriz por trás do Ecossistema Sumak Kawsay.'
      }
    }

  const { language } = useLanguage()

  const title: Record<string, string> = {
    en: 'Our Team',
    es: 'Nuestro equipo',
    pt: 'Nossa equipe'
  }

  return (
    <Element name="teamWork" className="w-full ">
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
