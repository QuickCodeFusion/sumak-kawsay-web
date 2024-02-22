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
    address: '0x3B0d1D48F046CBF197a9b4A88fa91c6a233691bA',
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })

  useEffect(() => {
    if (typeof data === 'string' && setBalanceOf !== undefined) {
      const balance = parseFloat(data)
      setBalanceOf(balance)
    }
    dispatch(setContract('0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54'))
  }, [data, setBalanceOf])

  return (
    <div className='text-black font-bold'>
      {isLoading ? 'Loading...' : (data?.toString() ?? '')}
    </div>
  )
}

export default BalanceOf
