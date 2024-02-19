'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead } from 'wagmi'

const CurrentPrice = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0x3B0d1D48F046CBF197a9b4A88fa91c6a233691bA',
    abi: AbyContractAddress,
    functionName: '_tokenPrice'
  })
  const price = Number(data) / 10 ** 18
  return (<div className='flex '>{isLoading ? 'loading...' : price}ETH</div>)
}

export default CurrentPrice
