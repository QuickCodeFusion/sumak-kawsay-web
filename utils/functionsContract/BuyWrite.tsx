import React, { useState, useEffect } from 'react'
import { useContractWrite, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
import Loading from '@/components/Loading'
import { toast } from 'sonner'
import { useDispatch } from '@/lib/redux/hooks'
import { setWaitTransaction } from '@/lib/redux/feature/waitTransaction'

const BuyWrite = ({ send, amount }: { send: number, amount: number }): JSX.Element => {
  const dispatch = useDispatch()
  const { address } = useAccount()
  const [Shown, setShown] = useState(false)
  const [error, setError] = useState(false)

  const { isLoading, isSuccess, isError, writeAsync, data: hash } = useContractWrite({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    account: address,
    functionName: 'buy'
  })
  useEffect(() => {
    if (isSuccess && hash?.hash !== undefined) {
      toast(
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
  }, [isError, Shown, isSuccess, status, error])

  return (
    <div className='flex justify-center w-full flex-col items-center gap-4'>
      <ButtonUI
        className='w-52 uppercase rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-none text-white'
        variant={'outline'}
        onClick={() => {
          if (amount > 0) {
            writeAsync({
              value: parseEther(send.toString()),
              args: [amount]
            }).then(() => {
              setShown(true)
            }).catch(error => {
              setShown(true)
              console.log(error)
            })
          } else setError(true)
        }
        }
      >
        Aprovar
      </ButtonUI>
      {isLoading && <Loading />}
    </div>
  )
}

export default BuyWrite
