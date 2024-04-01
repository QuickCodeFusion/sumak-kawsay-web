'use client'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'
import { useEffect } from 'react'
import { setContract } from '@/lib/redux/feature/contractSlice'
import { useDispatch } from '@/lib/redux/hooks'
import { useLanguage } from '@/app/languageProvider'

interface BalanceOfProps {
  setBalanceOf?: (balance: number) => void
  balance?: number
  isDisconnected?: boolean
}

const BalanceOf = ({ setBalanceOf, balance, isDisconnected }: BalanceOfProps): JSX.Element => {
  const dispatch = useDispatch()
  const { language } = useLanguage()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Connect your wallet',
      es: 'Conecta tu billetera',
      pt: 'Conecte sua carteira'
    }
  }

  useEffect(() => {
    if (typeof data?.toString() === 'string' && setBalanceOf !== undefined) {
      const newBalance = Number(data)
      setBalanceOf(newBalance)
    }
    dispatch(setContract('0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54'))
  }, [data?.toString(), setBalanceOf, isDisconnected])

  return (
    <div className='text-gray-600 font-bold'>
      {isLoading
        ? 'Loading...'
        : isDisconnected
          ? `${text[1][language]}`
          : `${balance} UNITY`}
    </div>
  )
}

export default BalanceOf
