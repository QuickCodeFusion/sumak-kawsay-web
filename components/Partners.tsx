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
        <div className="my-8 space-y-4 uppercase text-center w-full h-64 md:scale-150">
            <h1>{text[1][language]}</h1>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-24 w-full ">
                {partners.map(partner => (
                    <div key={partner.name} className='flex items-center justify-center '>
                    <Image
                    width={100}
                    height={50} key={partner.name} src={partner.image} alt={partner.name}
                    className=' '/>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Partners
