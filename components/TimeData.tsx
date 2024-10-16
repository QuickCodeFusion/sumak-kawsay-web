'use client'
import { useEffect, useState } from 'react'
import { Progress } from './ui/progress-bar'
import { useLanguage } from '@/app/languageProvider'

interface props {
  stage: string
  progress: number | undefined
  goal: number | undefined
  value?: number | undefined
}
export const TimeData: React.FC<props> = ({ stage, progress, goal, value }): React.JSX.Element => {
  const [percentage, setPercentage] = useState(0)
  const { language } = useLanguage()
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Secure your stake',
      es: 'Asegure su participación',
      pt: 'Garanta sua aposta'
    },
    2: {
      en: 'Fractions Sold',
      es: 'Fracciones vendidas',
      pt: 'Frações vendidas'
    }
  }
  useEffect(() => {
    if (typeof progress === 'number' && typeof goal === 'number') {
      setPercentage((progress / goal) * 100)
    }
  }, [progress])
  return (
    <div className='grid place-items-center gap-4 '>
        <div className='w-3/4 flex flex-col items-center font-bold'>
          <p className='text-sm uppercase md:text-base'>
            {text[1][language]}
          </p>
          <p className='text-sm uppercase md:text-base'>
          {text[2][language]} {progress} / {goal}
          </p>
        </div>
        <Progress value={percentage ?? 0} className='w-3/4 h-3 md:h-5 outline-dashed outline-1 outline-white'/>
    </div>
  )
}
