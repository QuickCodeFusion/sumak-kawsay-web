'use client'
import { useContractRead } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { TimeData } from '@/components/TimeData'

const InfoPhase = (): JSX.Element => {
  const { data } = useContractRead({
    address: '0x47633E0A6dA0DD5437D9573619Bf6a989f7816fb',
    abi: AbyContractAddress,
    functionName: 'currentPhase'
  })
  const { data: tokensold } = useContractRead({
    address: '0x47633E0A6dA0DD5437D9573619Bf6a989f7816fb',
    abi: AbyContractAddress,
    functionName: 'tokensSold'
  })
  const phase = String(data?.phase)
  const price = Number(data?.price) / 10 ** 18
  const total = Number(data?.total)
  const sold = Number(tokensold)
  return <TimeData stage={phase} progress={sold} goal={total} value={price} />
}

export default InfoPhase
