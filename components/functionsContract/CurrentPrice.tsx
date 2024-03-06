'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead } from 'wagmi'

const CurrentPrice = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: '0xC531027f80f579a4a9Ce442d8DAeD85960096D7f',
    abi: AbyContractAddress,
    functionName: '_tokenPrice'
  })
  const price = Number(data) / 10 ** 18
  return (<div className='flex '>{isLoading ? 'loading...' : price}ETH</div>)
}

export default CurrentPrice
