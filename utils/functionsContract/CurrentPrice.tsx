'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead } from 'wagmi'

const CurrentPrice = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0x47633E0A6dA0DD5437D9573619Bf6a989f7816fb',
    abi: AbyContractAddress,
    functionName: '_tokenPrice'
  })
  const price = Number(data) / 10 ** 18
  return (<div>{isLoading ? 'loading...' : price}</div>)
}

export default CurrentPrice
