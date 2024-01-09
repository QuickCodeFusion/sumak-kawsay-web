import { ButtonUI } from './ui/button'
import { Progress } from './ui/progress-bar'

export const TimeData = (): React.JSX.Element => {
  return (
    <div className='w-1/2 grid place-items-center gap-4 '>
        <div className='flex justify-between w-full font-bold text-white'><p className='text-x uppercase'>stage 1 : 20% bonus !</p><p className='text-x uppercase'>2000 / 10000</p></div>
        <Progress value={50} className='h-7 outline-dashed p-1 outline-1 outline-white'/>
        <ButtonUI className='w-52 uppercase ' variant={'outline'}>
            buy now
        </ButtonUI>
    </div>
  )
}
