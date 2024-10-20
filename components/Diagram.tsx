'use client'
import { useState } from 'react'
import { Card } from './ui/card'
import { useLanguage } from '@/app/languageProvider'

const Diagram = (): React.JSX.Element => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const { language } = useLanguage()

  const items: Array<Record<string, string>> = [{
    en: 'Super Incubator \nEARTH',
    es: 'Super Incubador \nTIERRA',
    pt: 'Super Incubador \nTERRA'
  },
  {
    en: 'Super Incubator \nWATER',
    es: 'Super Incubador \nAGUA',
    pt: 'Super Incubador \nAGUA'
  },
  {
    en: 'Super Incubator \nAIR',
    es: 'Super Incubador \nAIRE',
    pt: 'Super Incubador \nAR'
  },
  {
    en: 'Super Incubator \nFIRE',
    es: 'Super Incubador \nFUEGO',
    pt: 'Super Incubador \nFUEGO'
  }]
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Tokenized Global Fund',
      es: 'Fondo Global Tokenizado',
      pt: 'Fundo Global Tokenizado'
    }
  }

  return (
    <div className="w-full lg:scale-125 max-w-5xl mx-auto p-8 rounded-xl shadow-lg">
      <div className="relative">
        <Card
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 p-4 bg- rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600"
          onMouseEnter={() => { setHoveredItem(null) }}
          onMouseLeave={() => { setHoveredItem(null) }}
        >
          <h1>
            <p className="text-center font-medium">{text[1][language]}</p>
          </h1>
        </Card>

        {/* SVG for connecting lines */}
        <svg className="w-full h-64 mt-24 stroke-current" viewBox="0 0 400 100" preserveAspectRatio="none">
          <path d="M200,20 Q200,60 50,100" strokeWidth="2" fill="none" />
          <path d="M200,20 Q200,60 150,100" strokeWidth="2" fill="none" />
          <path d="M200,20 Q200,60 250,100" strokeWidth="2" fill="none" />
          <path d="M200,20 Q200,60 350,100" strokeWidth="2" fill="none" />
        </svg>

        {/* Child nodes */}
        <div className="flex justify-between mt-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-40 p-3 bg-card-foreground text-secondary rounded-lg shadow-md transition-all duration-300 ${
                hoveredItem === index ? 'bg-card transform scale-105' : ''
              }`}
              onMouseEnter={() => { setHoveredItem(index) }}
              onMouseLeave={() => { setHoveredItem(null) }}
            >
              <p className="text-center font-medium">{item[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Diagram
