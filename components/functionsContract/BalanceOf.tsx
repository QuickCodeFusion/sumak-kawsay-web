'use client'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'
import { useEffect } from 'react'
import { setContract } from '@/lib/redux/feature/contractSlice'
import { useDispatch } from '@/lib/redux/hooks'

interface BalanceOfProps {
  setBalanceOf?: (balance: number) => void
  balance?: number
  isDisconnected?: boolean
}

const BalanceOf = ({ setBalanceOf, balance, isDisconnected }: BalanceOfProps): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })

  useEffect(() => {
    if (typeof data === 'string' && setBalanceOf !== undefined) {
      const newBalance = parseFloat(data)
      setBalanceOf(newBalance)
    }
    dispatch(setContract('0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54'))
  }, [data, setBalanceOf])

  return (
    <div className='text-gray-400 font-bold'>
      {isLoading
        ? 'Loading...'
        : isDisconnected
          ? 'Connect your wallet to see your balance'
          : `${data?.toString()} UNITY`}
    </div>
  )
}

export default BalanceOf
