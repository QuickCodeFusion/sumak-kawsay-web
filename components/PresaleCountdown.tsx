'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'

import { Timer } from './ui/timer'

const PresaleCountdown = (): React.JSX.Element => {
  const { data } = useContractRead({
    address: '0x5808476d3ac9F4Bc5eaBc4a2a8bEE91F152C5BD3',
    abi: AbyContractAddress,
    functionName: 'checkAndUpdatePhase'
  })
  const time = Number(data)
  return (
        <div className='flex flex-col  text-center justify-center items-center my-10'>
            <h5 className='text-lg uppercase font-semibold text-white'>Pre-sale ends in</h5>
            <Timer time={time} size={'lg'} />
        </div>
  )
}

export default PresaleCountdown
