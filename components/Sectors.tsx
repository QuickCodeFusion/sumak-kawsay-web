import { useLanguage } from '@/app/languageProvider'
import { Card, CardContent } from './ui/card'

const Sectors = (): React.JSX.Element => {
  const { language } = useLanguage()
  const pos: string[] = [
    'top-24',
    '',
    'top-24',
    'top-24',
    '',
    'top-24',
    ''
  ]
  const items: Array<Record<string, string>> = [
    {
      en: 'Deep sustainability, ecosystem regeneration, and eco-technologies',
      es: 'Sostenibilidad profunda, regeneración de ecosistemas y eco-tecnologías',
      pt: 'Sustentabilidade profunda, regeneração de ecosistemas e tecnologias ecoloógicas'
    },
    {
      en: 'Integral human regeneration and universal wellbeing',
      es: 'Regeneración integral del ser y bienestar universal',
      pt: 'Regeneração integral do ser e bem-estar universal'
    },
    {
      en: 'Ancestral wisdom and creative expression for the future of humanity',
      es: 'Sabiduria ancestral y expresión creativa para el futuro de la humanidad',
      pt: 'Sabedoria ancestral e expressão creativa para o futuro da humanidade'
    },
    {
      en: 'Solidarity economies and ecosystems of shared abundance',
      es: 'Economías solidarias y ecosistemas de abundancia compartida',
      pt: 'Economias solidarias e ecosistemas de abundaência compartida'
    },
    {
      en: 'Holistic governance and collective participation technologies',
      es: 'Gobernanza holística y tecnologías de la participación colectiva',
      pt: 'Gobernança holística e tecnologias de participação coletiva'
    },
    {
      en: 'Planetary wisdom education and universal communication',
      es: 'Educación para la sabiduría planetaria y la comunicación universal',
      pt: 'Educação para a sabedoria planetária e a comunicação universal'
    },
    {
      en: 'Collective spirituality and soul regeneration',
      es: 'Espiritualidad colectiva y regeneración del alma',
      pt: 'Espiritualidade coletiva e regeneração do alimento'
    }
  ]
  return (
    <section className="flex flex-col gap-10 w-full items-center">
        <div className="grid grid-cols-3 gap-2 md:min-h-[300px] w-full md:w-1/2 grid-rows-3">
            {items.map((item, index) => (
                <Card key={index} className={`${(index === 6 && 'col-start-2')} relative ${pos[index]} w- text-center rounded-full aspect-square`}>
                    <CardContent className='p-4 text-xs md:text-base py-6 text-balance'>{item[language]}</CardContent>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default Sectors
