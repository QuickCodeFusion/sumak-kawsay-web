'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'

const BalanceOf = (): JSX.Element => {
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default BalanceOf
