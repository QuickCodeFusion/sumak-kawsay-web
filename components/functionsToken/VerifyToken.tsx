'use client'
import { useContractRead, useAccount } from 'wagmi'
import { AbyUsdt, contract } from '@/utils/AbyContrat'

const VerifyToken = (): JSX.Element => {
  const { address } = useAccount()
  const { data } = useContractRead({
    address: '0xbc13c88A984d5B023E6EB4D6BA7547792a0e4ceC',
    abi: AbyUsdt,
    functionName: 'allowance',
    args: [address, contract]
  })
  const amount = Number(data) / 10 ** 18
  return <div>{amount} USDT</div>
}

export default VerifyToken
