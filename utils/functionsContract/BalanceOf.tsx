'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'
import { setBalanceOf } from '@/lib/redux/feature/balanceOfSlice'
import { useDispatch } from '@/lib/redux/hooks'

const BalanceOf = (): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })
  const balance = Number(0)
  dispatch(setBalanceOf(balance))
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default BalanceOf
