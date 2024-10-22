import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'

const Partners = (): JSX.Element => {
  const { language } = useLanguage()
  const text: Record<string, Record<string, string>> = {
    1: {
      en: 'Pioneering Drivers',
      es: 'Impulsores Pioneros',
      pt: 'Impulsionadores Pioneiros'
    }
  }
  const partners = [
    {
      name: 'bluedot',
      image: '/bluedot.png',
      link: ''
    },
    {
      name: 'corenexus',
      image: '/corenexus.png',
      link: ''
    },
    {
      name: 'recommon',
      image: '/recommon.png',
      link: ''
    }
  ]
  return (
        <div className="my-12 uppercase text-center space-y-4 w-full">
            <h1>{text[1][language]}</h1>
            <div className="flex justify-center gap-8 w-full flex-wrap ">
                {partners.map(partner => (
                    <div key={partner.name} className='flex w-auto h-auto items-center justify-center aspect-video'>
                    <Image
                    width={100}
                    height={50} key={partner.name} src={partner.image} alt={partner.name}
                    className='h-1/2 w-auto'/>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Partners
