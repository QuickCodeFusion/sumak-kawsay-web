'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'

export const saleEnded = (): boolean => {
  const { data } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'saleEnded'
  })

  return data as boolean
}
