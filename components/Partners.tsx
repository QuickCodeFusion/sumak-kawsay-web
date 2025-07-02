import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'
import Link from 'next/link'

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
      link: 'http://bluedotproject.com'
    },
    {
      name: 'corenexus',
      image: '/corenexus.png',
      link: 'https://corenexus.is/'
    },
    {
      name: 'recommon',
      image: '/recommon.png',
      link: 'https://www.recommon.land/'
    },
    {
      name: 'indrani',
      image: '/indrani.png',
      link: 'https://www.indrani.com/'
    }
  ]
  return (
        <div className="my-8 space-y-12 text-3xl text-center font-semibold pb-2 h-64">
            <h1>{text[1][language]}</h1>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-24 w-full p-4 rounded-md ">
                {partners.map(partner => (
                    <Link target='_blank' href={partner.link} key={partner.name} className='flex items-center justify-center'>
                    <Image
                    width={125}
                    height={65} key={partner.name} src={partner.image} alt={partner.name}
                    className='scale-110 md:scale-100 '/>
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default Partners
