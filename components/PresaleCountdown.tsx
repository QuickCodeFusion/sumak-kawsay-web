'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'

import { Timer } from './ui/timer'

const PresaleCountdown = (): React.JSX.Element => {
  const { data } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'checkTimePhase'
  })
  const time = Number(data)
  return (
        <div className='flex flex-col text-center justify-center items-center my-5'>
            <h5 className='text-lg uppercase font-semibold'>Pre-sale ends in</h5>
            <Timer time={time} size={'lg'} />
        </div>
  )
}

export default PresaleCountdown
