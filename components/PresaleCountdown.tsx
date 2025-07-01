'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { Timer } from './ui/timer'
import { useLanguage } from '@/app/languageProvider'
// import { useEffect, useState } from 'react'

const PresaleCountdown = (): React.JSX.Element => {
  const { language } = useLanguage()
  // const [timer, setTimer] = useState(false)
  const { data } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'checkTimePhase'
  })
  const time = Number(data)
  console.log(time)

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Security Token Offering (STO)',
      es: 'Oferta de Tokens de Valor (STO)',
      pt: 'Oferta de Tokens de Valores (STO)'
    },
    2: {
      en: 'Live Presale',
      es: 'Preventa en vivo',
      pt: 'Pré-venda Aberta'
    }
  }
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
        <div className='flex flex-col text-center justify-center items-center my-3'>
            <h5 className='text-xl uppercase font-semibold'>{text[1][language]}</h5>
            <h5 className='text-xl uppercase font-semibold'>{text[2][language]}</h5>
            <Timer time={time} size={'lg'} />
        </div>
  )
}

export default PresaleCountdown
