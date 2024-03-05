'use client'
import React, { useState, useEffect } from 'react'
import { useContractWrite, useAccount } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
// import { parseEther } from 'viem'
import { ButtonUI } from '@/components/ui/button'
import Loading from '@/components/Loading'
import { toast } from 'sonner'
import { useDispatch } from '@/lib/redux/hooks'
import { setWaitTransaction } from '@/lib/redux/feature/waitTransaction'

const BuyWrite = ({ amount, reset }: { amount: number, reset: () => void }): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const [Shown, setShown] = useState(false)
  const [error, setError] = useState(false)

  const { isLoading, isSuccess, isError, writeAsync, data: hash } = useContractWrite({
    address: '0x5808476d3ac9F4Bc5eaBc4a2a8bEE91F152C5BD3',
    abi: AbyContractAddress,
    account: address,
    functionName: 'buy'
  })
  useEffect(() => {
    if (isSuccess && hash?.hash !== undefined) {
      toast.loading(
        'Procesando', {
          style: { background: 'yellow', color: '#000' }
        }
      )
      dispatch(setWaitTransaction(hash?.hash))
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
  console.log(hash)
  return (
    <div className='flex justify-center w-full flex-col items-center gap-4'>
      <ButtonUI
        className='w-52 uppercase rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-none text-white'
        variant={'outline'}
        onClick={() => {
          if (amount > 0) {
            writeAsync({
              args: [amount]
            }).then(() => {
              setShown(true)
            }).catch(error => {
              setShown(true)
              console.log(error)
            })
            reset()
          } else setError(true)
        }
        }
      >
        buy
      </ButtonUI>
      {isLoading && <Loading />}
      {isError && <div>Transaction: {JSON.stringify(hash)}</div>}
    </div>
  )
}

export default BuyWrite
