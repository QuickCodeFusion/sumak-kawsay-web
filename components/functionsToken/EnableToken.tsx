'use client'
import React, { useState, useEffect } from 'react'
import { useContractWrite, useAccount } from 'wagmi'
import { AbyUsdt } from '@/configWagmi/AbyContrat'
import { parseEther } from 'viem'
import { ButtonUI } from '@/components/ui/button'
import Loading from '@/components/Loading'
import { toast } from 'sonner'
import { useDispatch } from '@/lib/redux/hooks'
import { setWaitTransaction } from '@/lib/redux/feature/waitTransaction'

const EnableToken = ({ amount, reset }: { amount?: number, reset?: () => void }): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const [Shown, setShown] = useState(false)
  const [error, setError] = useState(false)

  const { isLoading, isSuccess, isError, writeAsync, data } = useContractWrite({
    address: '0xbc13c88A984d5B023E6EB4D6BA7547792a0e4ceC',
    abi: AbyUsdt,
    account: address,
    functionName: 'approve'
  })
  useEffect(() => {
    if (isSuccess && data?.hash !== undefined) {
      toast.loading(
        'Procesando', {
          style: { background: 'yellow', color: '#000' }
        }
      )
      dispatch(setWaitTransaction(data?.hash))
    }
    if ((isError && Shown) || error) {
      toast.error(
        'Error', {
          style: { background: 'red', color: '#FFF' }
        }
      )
      setShown(false)
      setError(false)
    }
  }, [isError, Shown, isSuccess, error])
  console.log(data)
  return (
    <div className='flex justify-center w-full flex-col items-center gap-4'>
      <ButtonUI
        className='w-52 uppercase rounded-full bg-white text-black'
        variant={'outline'}
        onClick={() => {
          writeAsync({
            args: ['0x5808476d3ac9F4Bc5eaBc4a2a8bEE91F152C5BD3', parseEther('0')]
          }).then(() => {
            setShown(true)
          }).catch(error => {
            setShown(true)
            console.log(error)
          })
          // reset()
        }
        }
      >
        Enable USDT
      </ButtonUI>
      {isLoading && <Loading />}
    </div>
  )
}

export default EnableToken
