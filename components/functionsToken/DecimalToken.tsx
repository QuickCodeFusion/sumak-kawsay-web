'use client'
import { useContractRead } from 'wagmi'
import { AbyToken } from '@/utils/AbyContrat'
import { useEffect, useState } from 'react'

const DecimalToken = (): JSX.Element => {
  const [decimals, setDecimals] = useState(0)
  const { data, isLoading } = useContractRead({
    address: '0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54',
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
