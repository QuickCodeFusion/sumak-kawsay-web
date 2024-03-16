'use client'
import { useContractRead, useAccount } from 'wagmi'
import { AbyUsdt, contract } from '@/utils/AbyContrat'

export const VerifyToken = (): number => {
  const { address } = useAccount()
  const { data } = useContractRead({
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    abi: AbyUsdt,
    functionName: 'allowance',
    args: [address, contract]
  })
  const amount = Number(data) / 10 ** 6
  return amount
}
