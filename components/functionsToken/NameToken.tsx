'use client'
import { useContractRead } from 'wagmi'
import { AbyToken } from '@/configWagmi/AbyContrat'

const NameToken = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54',
    abi: AbyToken,
    functionName: 'name'
  })
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default NameToken
