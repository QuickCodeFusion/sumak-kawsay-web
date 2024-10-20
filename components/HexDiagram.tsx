import { useLanguage } from '@/app/languageProvider'
import { Card, CardContent } from './ui/card'

export const HexDiagram = (): JSX.Element => {
  const { language } = useLanguage()

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

  const positions = [
    { top: '50%', left: '50%' },
    { top: '20%', left: '50%' },
    { top: '37.5%', left: '78.65%' },
    { top: '65%', left: '78.65%' },  
    { top: '79.5%', left: '50%' },  
    { top: '65%', left: '21.35%' },  
    { top: '37.5%', left: '21.35%' },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
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
              <Card className="w-full h-full rounded-full overflow-hidden border border-yellow-500 bg-blue-900/80 backdrop-filter-none">
                <CardContent className="h-full flex items-center justify-center p-4 text-center">
                  <p className="line-clamp-4 text-balance text-blue-100 @container @[4rem]:text-[0.5rem] @[8rem]:text-xs @[12rem]:text-sm @[16rem]:text-base">
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
