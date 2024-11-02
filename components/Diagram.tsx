import { useLanguage } from '@/app/languageProvider'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import DashLine from './ui/llline'
import { ButtonUI } from './ui/button'

export default function Diagram (): React.JSX.Element {
  const elements = [
    { name: 'EARTH', icon: '/level3.png', borderColor: 'border-[#00FF00] drop-shadow-[0_0_10px_#00FF00]', return: '12%', blocking: '12' },
    { name: 'WATER', icon: '/watericon.png', borderColor: 'border-[#0000FF] drop-shadow-[0_0_10px_#0000FF]', return: '18%', blocking: '24' },
    { name: 'AIR', icon: '/airicon.png', borderColor: 'border-[#FFFF00] drop-shadow-[0_0_10px_#FFFF00]', return: '24%', blocking: '36' },
    { name: 'FIRE', icon: '/level2.png', borderColor: 'border-[#FF0000] drop-shadow-[0_0_10px_#FF0000]', return: '30%', blocking: '56' }
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
        <div className="grid grid-cols-1 md:flex justify-around  gap-2">
          {elements.map((element, index) => (
            <Card key={index} className={`border ${element.borderColor} flex flex-col group justify-between items-center cursor-pointer contrast-125`}>
              <Image
              src={element.icon}
              alt={element.name}
              width={128}
              height={128}
              className='group-hover:scale-105 group-hover:-translate-y-2 transition duration-300 drop-shadow-sm-white group-hover:drop-shadow-4xl-white'/>
              <div className="text-center group-hover:scale-105 group-hover:-translate-y-2 transition duration-300 shadow-md rounded-sm p-2 space-y-2">
                <div className="font-bold">{element.name}</div>
                <div className="text-sm">{text[language]}</div>
                <div className='grid grid-cols-2'>
                  <span>
                    <p>Return</p>
                    <p>APY {element.return}%</p>
                  </span>
                  <span>
                    <p>Blocking Time</p>
                    <p>{element.blocking} Months</p>
                  </span>
                </div>
                <ButtonUI>
                  STAKE
                </ButtonUI>
              </div>
            </Card>
          ))}
        </div>

        <svg className="absolute top-52 left-0 w-full h-64 -z-50 hidden md:block" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path d="M50,0 V40" stroke="white" strokeWidth="1"/>
          <path d="M150,0 V40" stroke="white" strokeWidth="1"/>
          <path d="M250,0 V40" stroke="white" strokeWidth="1"/>
          <path d="M350,0 V40" stroke="white" strokeWidth="1"/>
          <path d="M50,40 H350" stroke="white" strokeWidth="1"/>
          <path d="M200,40 V120" stroke="white" strokeWidth="1"/>
          <path d="M40,120 H360" stroke="white" strokeWidth="1"/>
        </svg>
        <svg className="w-full -z-50 md:hidden" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path d="M50,0 V40" stroke="white" strokeWidth="1"/>
          <path d="M350,0 V40" stroke="white" strokeWidth="1"/>
          <path d="M50,40 H350" stroke="white" strokeWidth="1"/>
          <path d="M200,40 V120" stroke="white" strokeWidth="1"/>
          <path d="M0,120 H400" stroke="white" strokeWidth="1"/>
          <path d="M0,200 V120" stroke="white" strokeWidth="1"/>
          <path d="M400,200 V120" stroke="white" strokeWidth="1"/>
        </svg>
        <DashLine className="absolute z-50 hidden md:inline-block md:top-96 left-0 "></DashLine>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-around gap-4 ">
          {categories.map((category, index) => (
            <Card key={index} className="bg-blue-900 border-none cursor-pointer">
              <CardContent className="p-4">
                <h3 className="text-md md:text-lg font-bold text-center">{category}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
