'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'

import { Timer } from './ui/timer'

const PresaleCountdown = (): React.JSX.Element => {
  const { data } = useContractRead({
    address: '0xC531027f80f579a4a9Ce442d8DAeD85960096D7f',
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
