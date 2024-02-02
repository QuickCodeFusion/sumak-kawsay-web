'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead, useAccount } from 'wagmi'

const BalanceOf = (): JSX.Element => {
  const { address } = useAccount()
  console.log(address)
  const { data, isLoading } = useContractRead({
    address: '0x47633E0A6dA0DD5437D9573619Bf6a989f7816fb',
    abi: AbyContractAddress,
    functionName: 'balanceOf',
    args: [address]
  })
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default BalanceOf
