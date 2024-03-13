'use client'
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '../ui/button'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { CloseIcon } from '../Icons/CloseIcon'
import { useOwner } from '@/utils/useOwner'

const ClosePresale = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element => {
  // const [open, setOpen] = useState(false)
  const [Shown, setShown] = useState(false)
  const { address } = useAccount()
  const owner = useOwner()

  const { writeAsync, isLoading, data } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'endSale'
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
    <>
      <ButtonUI
        className='border-b bg-transparent hover:bg-background rounded-none text-foreground'
        variant='ghost'
        onClick={() => { setOpen(true) } }
      >
        <CloseIcon />
      </ButtonUI>
    </>
  )
}

export default ClosePresale
