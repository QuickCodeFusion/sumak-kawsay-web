'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { Timer } from './ui/timer'
// import { useEffect, useState } from 'react'

const PresaleCountdown = (): React.JSX.Element => {
  // const [timer, setTimer] = useState(false)
  const { data } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'checkTimePhase'
  })
  const time = Number(data)
  console.log(time)
  /* useEffect(() => {
    if (timer) {
      setTimer(false)
      window.location.reload()
    }
  }, [timer, data])

  if (time === 0) {
    setTimeout(() => {
      setTimer(true)
    }, 10000)
  } else {
    setTimeout(() => {
      setTimer(true)
    }, time * 1000)
  } */

  return (
        <div className='flex flex-col text-center justify-center items-center my-5'>
            <h5 className='text-lg uppercase font-semibold'>Phase ends in</h5>
            <Timer time={time} size={'lg'} />
        </div>
  )
}

export default PresaleCountdown
