import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Diagram (): React.JSX.Element {
  const elements = [
    { name: 'EARTH', icon: '/level3.png' },
    { name: 'WATER', icon: '/watericon.png' },
    { name: 'AIR', icon: '/airicon.png' },
    { name: 'FIRE', icon: '/level2.png' }
  ]

  const categories = ['Local', 'Bioregional', 'Continental', 'Global']

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white text-center">
      <div className="relative flex flex-col md:space-y-16">
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          {elements.map((element, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Image src={element.icon} alt={element.name} width={128} height={128}/>
              <div className="text-center">
                <div className="font-bold">{element.name}</div>
                <div className="text-sm">(Super-Incubator)</div>
              </div>
            </div>
          ))}
        </div>

        <svg className="absolute top-32 left-0 w-full h-64 -z-50 hidden md:block" viewBox="0 0 400 200" preserveAspectRatio="none">
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

        <div className="grid grid-cols-2 md:flex justify-around gap-4 md:pt-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-blue-900 border-none">
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
