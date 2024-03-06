'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { TimeData } from '@/components/TimeData'
import { setCurrentPrice } from '@/lib/redux/feature/currentPriceSlice'
import { useDispatch } from '@/lib/redux/hooks'

export interface ContractData {
  phase: string
  total: number
  sold: number
  price: number
}
export type Data = [ContractData]
const InfoPhase = (): JSX.Element => {
  const dispatch = useDispatch()
  const { data } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'currentPhase'
  })
  const [newData] = data as Data
  console.log(data)
  const phase = String(data !== undefined && (newData.total))
  const price = Number(data !== undefined && (newData.phase)) / 10 ** 18
  const total = Number(data !== undefined && (newData.price))
  const sold = Number(data !== undefined && (data as unknown[])[1])
  dispatch(setCurrentPrice(price))
  return <TimeData stage={phase ?? ''} progress={sold ?? 0} goal={total ?? 0} value={price ?? 0} />
}

export default InfoPhase
