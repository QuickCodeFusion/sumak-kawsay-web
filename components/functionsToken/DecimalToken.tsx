'use client'
import { useContractRead } from 'wagmi'
import { AbyToken, contractToken } from '@/utils/AbyContrat'
import { useEffect, useState } from 'react'

const DecimalToken = (): JSX.Element => {
  const [decimals, setDecimals] = useState(0)
  const { data, isLoading } = useContractRead({
    address: contractToken,
    abi: AbyToken,
    functionName: 'decimals'
  })
  useEffect(() => {
    if (typeof data === 'number') {
      setDecimals(data)
    }
  }, [data])
  return (<div>{isLoading && decimals !== 0 ? 'loading...' : decimals}</div>)
}

export default DecimalToken
