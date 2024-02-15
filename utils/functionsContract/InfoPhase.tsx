'use client'
import { useContractRead, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { TimeData } from '@/components/TimeData'
import { useEffect } from 'react'
import { useSelector } from '@/lib/redux/hooks'
import { toast } from 'sonner'

const InfoPhase = (): JSX.Element => {
  const { waitTransaction } = useSelector(state => state.waitTransaction)
  const { status } = useWaitForTransaction({
    hash: waitTransaction
  })
  const { data } = useContractRead({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    functionName: 'currentPhase'
  })
  const { data: tokensold } = useContractRead({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    functionName: 'tokensSold'
  })
  useEffect(() => {
    if (status === 'success') {
      toast.info('Transaction successful')
    }
  }, [status])
  const phase = String(data?.phase)
  const price = Number(data?.price) / 10 ** 18
  const total = Number(1000000)
  const sold = Number(tokensold)
  return <TimeData stage={phase ?? ''} progress={sold ?? 0} goal={total ?? 0} value={price ?? 0} />
}

export default InfoPhase
