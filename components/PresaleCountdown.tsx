'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'

import { Timer } from './ui/timer'

const PresaleCountdown = (): React.JSX.Element => {
  const { data } = useContractRead({
    address: '0xfb7c08B23888255C6598AfF239121c10da2d148D',
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
