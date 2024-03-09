'use client'
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '../ui/button'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { DollarIcon } from '../Icons/DollarIcon'
import { useOwner } from '@/utils/useOwner'

const ReclaimUsdt = (): JSX.Element => {
  const [Shown, setShown] = useState(false)
  const { address } = useAccount()
  const owner = useOwner()
  const { writeAsync, isLoading, data } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'claimUSDT'
  })
  const { status } = useWaitForTransaction({
    hash: data?.hash
  })

  useEffect(() => {
    if (isLoading && Shown) {
      toast.loading(
        'Processing', {
          style: { background: 'yellow', color: '#000' },
          duration: 3000
        }
      )
    }
    if (status === 'success') {
      toast.success(
        'USDT transferred', {
          style: { background: 'green', color: '#FFF' }
        }
      )
      window.location.reload()
    }
  }, [isLoading, Shown, status])

  if (owner !== address || !owner) {
    return <></>
  }

  return (
      <ButtonUI
        className='rounded-full text-white shadow-sm shadow-vivid-violet-800 '
        variant='ghost'
        onClick={() => {
          writeAsync({
          }).then(() => {
            setShown(true)
          }).catch(error => {
            setShown(true)
            console.log(error)
          })
        }
        }
      >
        <DollarIcon />
      </ButtonUI>
  )
}

export default ReclaimUsdt
