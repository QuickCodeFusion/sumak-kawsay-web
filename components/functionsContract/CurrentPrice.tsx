'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead } from 'wagmi'

const CurrentPrice = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0x07fca38aD27bD9d0BFBef03011e6E92B16C6065a',
    abi: AbyContractAddress,
    functionName: '_tokenPrice'
  })
  const price = Number(data) / 10 ** 18
  return (<div className='flex '>{isLoading ? 'loading...' : price}ETH</div>)
}

export default CurrentPrice
