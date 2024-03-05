'use client'
import { useContractRead } from 'wagmi'
import { AbyToken } from '@/utils/AbyContrat'
import { useEffect } from 'react'
import { setContract } from '@/lib/redux/feature/contractSlice'
import { useDispatch } from '@/lib/redux/hooks'

const NameToken = (): JSX.Element => {
  const dispatch = useDispatch()
  const { data, isLoading } = useContractRead({
    address: '0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54',
    abi: AbyToken,
    functionName: 'name'
  })
  useEffect(() => {
    dispatch(setContract('0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54'))
  }, [data])

  return (<div>{isLoading ? 'loading...' : data?.toString()}</div>)
}

export default NameToken
