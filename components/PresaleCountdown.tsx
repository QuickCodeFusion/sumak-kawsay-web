'use client'

import { Timer } from './ui/timer'

const PresaleCountdown = (): React.JSX.Element => {
  return (
        <div className='flex flex-col  text-center justify-center items-center my-10'>
            <h5 className='text-lg uppercase font-semibold text-white'>Pre-sale ends in</h5>
            <Timer time={30 * 24 * 60 * 60} size={'lg'} />
        </div>
  )
}

export default PresaleCountdown
