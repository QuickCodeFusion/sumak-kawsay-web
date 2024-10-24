import { useLanguage } from '@/app/languageProvider'
import { Card, CardContent } from './ui/card'
import DashDotLineVertical from './ui/llline'

export const HexDiagram = (): JSX.Element => {
  const { language } = useLanguage()

  const items: Array<Record<string, string>> = [
    {
      en: 'Holistic governance and collective participation technologies',
      es: 'Gobernanza holística y tecnologías de la participación colectiva',
      pt: 'Gobernança holística e tecnologias de participação coletiva'
    },
    {
      en: 'Integral human regeneration and universal wellbeing',
      es: 'Regeneración integral del ser y bienestar universal',
      pt: 'Regeneração integral do ser e bem-estar universal'
    },
    {
      en: 'Planetary wisdom education and universal communication',
      es: 'Educación para la sabiduría planetaria y la comunicación universal',
      pt: 'Educação para a sabedoria planetária e a comunicação universal'
    },
    {
      en: 'Solidarity economies and ecosystems of shared abundance',
      es: 'Economías solidarias y ecosistemas de abundancia compartida',
      pt: 'Economias solidarias e ecosistemas de abundaência compartida'
    },
    {
      en: 'Collective spirituality and soul regeneration',
      es: 'Espiritualidad colectiva y regeneración del alma',
      pt: 'Espiritualidade coletiva e regeneração do alimento'
    },
    {
      en: 'Ancestral wisdom and creative expression for the future of humanity',
      es: 'Sabiduria ancestral y expresión creativa para el futuro de la humanidad',
      pt: 'Sabedoria ancestral e expressão creativa para o futuro da humanidade'
    },
    {
      en: 'Deep sustainability, ecosystem regeneration, and eco-technologies',
      es: 'Sostenibilidad profunda, regeneración de ecosistemas y eco-tecnologías',
      pt: 'Sustentabilidade profunda, regeneração de ecosistemas e tecnologias ecoloógicas'
    }
  ]

  const positions = [
    { top: '50%', left: '50%' },
    { top: '20%', left: '50%' },
    { top: '37.5%', left: '78.65%' },
    { top: '65%', left: '78.65%' },
    { top: '79.5%', left: '50%' },
    { top: '65%', left: '21.35%' },
    { top: '37.5%', left: '21.35%' }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-4 scale-110 md:scale-100">
      <div className="relative w-full md:scale-75" style={{ paddingBottom: '100%' }}>
          <DashDotLineVertical className="absolute z-50 inset-0 -top-72 left-16 hidden md:block"></DashDotLineVertical>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 400 120"
          className='stroke-current absolute inset-0 -top-28'
          >
            <path
            d="M200,0 V120"
            fill="none"
            strokeWidth="1"
            stroke="hsl(0, 0%, 80%)"
            strokeDasharray="3 18"
            ></path>
            <defs>
              <linearGradient id="SvgjsLinearGradient1001">
                <stop offset="0"></stop>
                <stop offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        <div className="absolute inset-0 bg-cover bg-center">
          {/* Enclosing circle */}
          <div className="absolute inset-0 scale-110 rounded-full border-2 border-blue-300/50 p-24 bg-blue-500/25 backdrop-blur-sm" style={{ top: '0', left: '0', right: '0', bottom: '0' }} />

          {items.map((item, index) => (
            <div
              key={index}
              className="absolute w-[35%] h-[35%]"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Card className="w-full h-full rounded-full overflow-hidden border border-blue-300/50 bg-blue-900/80 backdrop-filter-none">
                <CardContent className="h-full flex items-center justify-center p-4 text-center">
                  <p className="font-bold text-balance text-blue-100 text-[0.5rem] sm:text-xs md:text-sm lg:text-base">
                    {item[language]}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HexDiagram
