'use client'
import { useEffect, useState } from 'react'
import { Progress } from './ui/progress-bar'

interface props {
  stage: string
  progress: number | undefined
  goal: number | undefined
  value?: number | undefined
}
export const TimeData: React.FC<props> = ({ stage, progress, goal, value }): React.JSX.Element => {
  const [percentage, setPercentage] = useState(0)
  useEffect(() => {
    if (typeof progress === 'number' && typeof goal === 'number') {
      setPercentage((progress / goal) * 100)
    }
  }, [progress])
  return (
    <div className='grid place-items-center gap-4 '>
        <div className='w-3/4 flex flex-col items-center font-bold'>
          <p className='text-sm uppercase md:text-base'>
            Presale exclusive: 70% extra tokens
          </p>
          <p className='text-sm uppercase md:text-base'>
            token sold: {progress} / {goal} Unity
          </p>
        </div>
        <Progress value={percentage ?? 0} className='w-3/4 h-3 md:h-5 outline-dashed outline-1 outline-white'/>
    </div>
  )
}
