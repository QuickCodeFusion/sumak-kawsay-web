'use client'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { useContractRead } from 'wagmi'

const CurrentPrice = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: '_tokenPrice'
  })
  const price = Number(data) / 10 ** 18
  return (<div className='flex '>{isLoading ? 'loading...' : price}ETH</div>)
}

export default CurrentPrice
