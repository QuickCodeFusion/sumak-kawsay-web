import { Progress } from './ui/progress-bar'

export const TimeData = (): React.JSX.Element => {
  return (
    <div className='grid place-items-center gap-4 '>
        <div className='w-3/4 md:w-[1000px] flex justify-between  font-bold text-white'><p className='text-sm uppercase md:text-lg'>stage 1 : 20% bonus !</p><p className='text-sm uppercase md:text-lg'>2000 / 10000</p>
        </div>
        <Progress value={30} className='w-3/4 md:w-[1000px] h-7 md:h-10 outline-dashed p-1 outline-1 outline-white'/>
    </div>
  )
}
