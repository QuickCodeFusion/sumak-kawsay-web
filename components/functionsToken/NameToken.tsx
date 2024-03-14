'use client'
import { useContractRead } from 'wagmi'
import { AbyToken, contractToken } from '@/utils/AbyContrat'
import { useEffect } from 'react'
import { setContract } from '@/lib/redux/feature/contractSlice'
import { useDispatch } from '@/lib/redux/hooks'

const NameToken = (): JSX.Element => {
  const dispatch = useDispatch()
  const { data, isLoading } = useContractRead({
    address: contractToken,
    abi: AbyToken,
    functionName: 'name'
  })
  useEffect(() => {
    dispatch(setContract(contractToken))
  }, [data])

  return (<div>{isLoading ? 'loading...' : '13.86$'}</div>)
}

export default NameToken
