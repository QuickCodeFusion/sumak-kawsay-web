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
    dispatch(setContract('0x248f2b2Ca86Dc1033be2Df56E5481f4f8BBE8c89'))
  }, [data])

  return (<div>{isLoading ? 'loading...' : '13.86$'}</div>)
}

export default NameToken
