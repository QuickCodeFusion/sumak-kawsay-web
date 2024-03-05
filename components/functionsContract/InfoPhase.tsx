'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { TimeData } from '@/components/TimeData'
import { setCurrentPrice } from '@/lib/redux/feature/currentPriceSlice'
import { useDispatch } from '@/lib/redux/hooks'

const InfoPhase = (): JSX.Element => {
  const dispatch = useDispatch()
  const { data } = useContractRead({
    address: '0x5808476d3ac9F4Bc5eaBc4a2a8bEE91F152C5BD3',
    abi: AbyContractAddress,
    functionName: 'currentPhase'
  })
  console.log(data)
  const phase = String(data !== undefined && (data as unknown[])[2])
  const price = Number(data !== undefined && (data as unknown[])[1]) / 10 ** 18
  dispatch(setCurrentPrice(price))
  const total = Number(data !== undefined && (data as unknown[])[0])
  const sold = Number(data !== undefined && (data as unknown[])[3])
  return <TimeData stage={phase ?? ''} progress={sold ?? 0} goal={total ?? 0} value={price ?? 0} />
}

export default InfoPhase
