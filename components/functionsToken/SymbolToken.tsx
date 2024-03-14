'use client'
import { useContractRead } from 'wagmi'
import { AbyToken, contractToken } from '@/utils/AbyContrat'

const SymbolToken = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: contractToken,
    abi: AbyToken,
    functionName: 'symbol'
  })
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default SymbolToken
