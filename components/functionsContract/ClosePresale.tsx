'use client'
import { useContractRead, useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '../ui/button'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { CloseIcon } from '../Icons/CloseIcon'
import { Divide } from 'lucide-react'

const ClosePresale = (): JSX.Element => {
  const [Shown, setShown] = useState(false)
  const { address } = useAccount()
  const { data: owner } = useContractRead({
    address: contract,
    abi: AbyContractAddress,
    functionName: 'owner'
  })
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
  if (!owner) {
    return (
    <></>
    )
  }
  return (
    <>
      <ButtonUI
        className={owner === address ? 'uppercase bg-sky-500 rounded-full border-none text-white' : 'invisible'}
        variant={'outline'}
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
        <CloseIcon />
      </ButtonUI>
    </>
  )
}

export default ClosePresale
