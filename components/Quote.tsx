import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

const Quote = (): React.JSX.Element => {
  const { language } = useLanguage()
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'The world\'s most valuable resources — land, water, and ecosystems — are now tokenized to drive sustainable development.',
      es: 'Los recursos más valiosos del mundo — tierra, agua y ecosistemas — ahora se tokenizan para impulsar el desarrollo sostenible.',
      pt: 'Os recursos mais valiosos do mundo — terra, agua e ecosistemas — agora são tokenizados para impulsionar o desenvolvimento sustentável.'
    },
    2: {
      en: 'Jane Mayer.',
      es: 'Jane Mayer.',
      pt: 'Jane Mayer.'
    },
    3: {
      en: 'Environmental Investment Strategist',
      es: 'Estratega de Inversiones',
      pt: 'Estrategista de Inversão'
    }
  }
  return (
    <Card className="bg-card p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <CardContent className="flex flex-col md:flex-row gap-2 items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            src="/mujer.png"
            alt="Profile picture"
            width={80}
            height={80}
            className="rounded-full border-2 border-white aspect-square"
          />
        </div>
        <div className="flex-grow">
          <blockquote className="text-foreground md:text-xl font-medium mb-2">
          &quot;{text[1][language]}&quot;
          </blockquote>
          <div className="text-right">
            <cite className="text-foreground font-bold block">{text[2][language]}</cite>
            <span className="text-accent-200 font-medium">
              {text[3][language]}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Quote
