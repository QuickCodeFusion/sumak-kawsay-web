'use client'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { useContractRead } from 'wagmi'

const CurrentPrice = (): JSX.Element => {
  const { data, isLoading } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'checkTimePhase'
  })
  const price = String(data)
  return (<div className='flex '>{isLoading ? 'loading...' : price}</div>)
}

export default CurrentPrice
