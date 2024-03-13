'use client'
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '../ui/button'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { UpdateIcon } from '../Icons/UpdateIcon'
import { useOwner } from '@/utils/useOwner'

const SwitchPhase = (): JSX.Element => {
  const [Shown, setShown] = useState(false)
  const { address } = useAccount()
  const owner = useOwner()
  const { writeAsync, isLoading, data, isError } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'switchPhase'
  })
  const { status } = useWaitForTransaction({
    hash: data?.hash
  })
  useEffect(() => {
    console.log(status)
    if (isLoading && Shown) {
      toast.loading(
        'Processing', {
          style: { background: 'yellow', color: '#000' },
          duration: 3000
        }
      )
    }
    if (isError) {
      toast.error(
        'Error', {
          style: { background: 'red', color: '#FFF' }
        }
      )
    }
    if (status === 'success') {
      toast.success(
        'Switch Phase', {
          style: { background: 'green', color: '#FFF' }
        }
      )
      window.location.reload()
    }
  }, [isLoading, Shown, status, isError])

  if (owner !== address || !owner) {
    return <></>
  }

  return (
      <ButtonUI
        className='border-b bg-transparent hover:bg-background rounded-none text-foreground '
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
        <UpdateIcon />
      </ButtonUI>
  )
}

export default SwitchPhase
