import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from './AbyContrat'

export const useWriteEndSale = (address: `0x${string}`): { writeAsync: any, isLoading: boolean, status: any, data: any } => {
  const { writeAsync, isLoading, data } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'endSale'
  })
  const { status } = useWaitForTransaction({
    hash: data?.hash
  })
  return { writeAsync, isLoading, status, data }
}
