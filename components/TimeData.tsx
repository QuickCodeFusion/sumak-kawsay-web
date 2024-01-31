'use client'
import { useEffect, useState } from 'react'
import { Progress } from './ui/progress-bar'

interface props {
  stage: number
  progress: number
  goal: number
}
export const TimeData: React.FC<props> = ({ stage, progress, goal }): React.JSX.Element => {
  const [percentage, setPercentage] = useState(0)
  useEffect(() => {
    setPercentage((progress / goal) * 100)
  }, [])
  return (
    <div className='grid place-items-center gap-4 '>
        <div className='w-3/4 flex justify-between  font-bold text-white'>
          <p className='text-sm uppercase md:text-lg'>
            stage {stage} : {percentage}% bonus !
          </p>
          <p className='text-sm uppercase md:text-lg'>
            {progress} / {goal} ETH
          </p>
        </div>
        <Progress value={percentage} className='w-3/4 h-3 md:h-5 outline-dashed outline-1 outline-white'/>
    </div>
  )
}
