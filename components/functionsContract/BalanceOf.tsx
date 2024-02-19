'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'
import { setBalanceOf } from '@/lib/redux/feature/balanceOfSlice'
import { useDispatch } from '@/lib/redux/hooks'

const BalanceOf = (): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    address: '0x3B0d1D48F046CBF197a9b4A88fa91c6a233691bA',
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })
  const balance = Number(data)
  dispatch(setBalanceOf(balance))
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default BalanceOf
