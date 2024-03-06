import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'
import { useEffect } from 'react'
import { setContract } from '@/lib/redux/feature/contractSlice'
import { useDispatch } from '@/lib/redux/hooks'

interface BalanceOfProps {
  setBalanceOf?: (balance: number) => void
}

const BalanceOf = ({ setBalanceOf }: BalanceOfProps): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    address: '0xC531027f80f579a4a9Ce442d8DAeD85960096D7f',
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })

  useEffect(() => {
    if (typeof data === 'string' && setBalanceOf !== undefined) {
      const balance = parseFloat(data)
      setBalanceOf(balance)
    }
    dispatch(setContract('0xfb7c08B23888255C6598AfF239121c10da2d148D'))
  }, [data, setBalanceOf])

  return (
    <div className='text-white font-bold'>
      {isLoading ? 'Loading...' : (data?.toString() ?? '')} UNITY
    </div>
  )
}

export default BalanceOf
