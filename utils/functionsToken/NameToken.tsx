'use client'
import { useContractRead } from 'wagmi'
import { AbyToken } from '@/configWagmi/AbyContrat'

const NameToken = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0x4e27Fd1f1Ae3Cf0E6f6Ec73F4Af5bc5449006ccd',
    abi: AbyToken,
    functionName: 'name'
  })
  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default NameToken
