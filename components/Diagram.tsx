import { useLanguage } from '@/app/languageProvider'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { ButtonUI } from './ui/button'
import Link from 'next/link'

export default function Diagram (): React.JSX.Element {
  const elements = [
    { name: 'EARTH', icon: '/level3.png', borderColor: ' drop-shadow-[1px_1px_10px_rgba(0,0,0,0.3)', return: '12', blocking: '12' },
    { name: 'WATER', icon: '/watericon.png', borderColor: ' drop-shadow-[1px_1px_10px_rgba(0,0,0,0.3)', return: '18', blocking: '24' },
    { name: 'AIR', icon: '/airicon.png', borderColor: ' drop-shadow-[1px_1px_10px_rgba(0,0,0,0.3)', return: '24', blocking: '36' },
    { name: 'FIRE', icon: '/level2.png', borderColor: ' drop-shadow-[1px_1px_10px_rgba(0,0,0,0.3)', return: '30', blocking: '56' }
  ]

  const text: Record<string, string> = {
    en: 'Accelerator-Incubator',
    es: 'Incubador-Acelerador',
    pt: 'Incubador-Acelerador'
  }

  const { language } = useLanguage()

  const categories = ['Local', 'Bioregional', 'Continental', 'Global']

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white text-center md:scale-125">
      <div className="relative flex flex-col md:space-y-40">
        <div className="grid grid-cols-1 md:flex justify-around gap-2">
          {elements.map((element, index) => {
            const line = index === elements.length - 1 ? 'h-[36rem] -bottom-[36rem] md:-bottom-40' : ''
            return (
            <Card key={index} className={'border-none drop-shadow-[0px_0px_1px_rgba(0,0,0,0.2)] flex flex-col group justify-between items-center cursor-pointer contrast-125 '}>
              {index < elements.length && (
                  <div className={line + ' absolute left-1/2 -bottom-40 w-[1px] h-40 md:h-40 -z-50 transform -translate-x-1/2 bg-black'}></div>
              )}
              <Image
              src={element.icon}
              alt={element.name}
              width={128}
              height={128}
              className='drop-shadow-sm-white group-hover:drop-shadow-4xl-white '/>
              <div className="text-center border-none space-y-2 p-2">
                <div className="font-bold">{element.name}</div>
                <div className="text-sm">{text[language]}</div>
                <div className='grid grid-cols-2 md:text-xs border-none'>
                  <span>
                    <p>Return</p>
                    <p>APY {element.return}%</p>
                  </span>
                  <span>
                    <p>Blocking Time</p>
                    <p>{element.blocking} Months</p>
                  </span>
                </div>
                <ButtonUI asChild>
                  <Link
                  target='_blank'
                  href={'https://raydium.io/swap/?inputMint=sol&outputMint=GyQjvwvkhSQgaCA5Rwo3cAxNpd5jSgdRQna8QXrtFt27&referrer=5rQra4Wh9tVu6cdmPuFUan9bmGsuAvqNDTp6Z9YD9ipe'}>
                      STAKE
                  </Link>
                </ButtonUI>
              </div>
            </Card>
            )
          }
          )}
        </div>

        {/* <svg className="absolute md:top-52 lg:top-40 left-0 w-full h-64 -z-50 hidden md:block stroke-yellow-500 drop-shadow-[0_0_10px_rgba(214,150,0,1)]" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path d="M50,0 V40"strokeWidth="1"/>
          <path d="M150,0 V40" strokeWidth="1"/>
          <path d="M250,0 V40" strokeWidth="1"/>
          <path d="M350,0 V40" strokeWidth="1"/>
          <path d="M50,40 H350" strokeWidth="1"/>
          <path d="M200,40 V120" strokeWidth="1"/>
          <path d="M40,120 H360" strokeWidth="1"/>
        </svg> */}
        {/* <svg className="w-full -z-50 md:hidden stroke-yellow-500 drop-shadow-[0_0_10px_rgba(214,150,0,1)]" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path d="M50,0 V40" strokeWidth="1"/>
          <path d="M350,0 V40" strokeWidth="1"/>
          <path d="M50,40 H350" strokeWidth="1"/>
          <path d="M200,40 V120" strokeWidth="1"/>
          <path d="M0,120 H400" strokeWidth="1"/>
          <path d="M0,200 V120" strokeWidth="1"/>
          <path d="M400,200 V120" strokeWidth="1"/>
        </svg> */}

        <div className="grid grid-cols-2 md:grid-cols-4 justify-around gap-4 mb-0 mt-24 md:my-0">
          {categories.map((category, index) => {
            const evenCard = index % 2 === 0 ? '' : 'hidden md:block'
            return (
            <Card key={index} className="border-none cursor-pointer group contrast-125 ">
              {index < categories.length && index !== categories.length - 1 && (
                  <div className={evenCard + ' absolute bottom-1/2 left-[100%] h-[1px] w-4 -z-50 bg-black'}></div>
              )}
              <CardContent className="p-4 drop-shadow-sm-white hover:drop-shadow-4xl-white">
                <h3 className="text-md md:text-lg font-bold text-center ">{category}</h3>
              </CardContent>
            </Card>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}
