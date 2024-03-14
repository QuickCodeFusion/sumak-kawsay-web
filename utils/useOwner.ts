'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'

export const useOwner = (): string => {
  const { data: owner } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'owner'
  })

  return owner as string
}
