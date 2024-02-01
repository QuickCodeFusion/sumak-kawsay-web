'use client'
import { useContractRead } from 'wagmi'
import { AbyToken } from '@/configWagmi/AbyContrat'

const SymbolToken = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0x654AE429F03fd1f428D479a89640Fa799C2A19aE',
    abi: AbyToken,
    functionName: 'symbol'
  })
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default SymbolToken
