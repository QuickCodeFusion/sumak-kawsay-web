'use client'
import React, { useState, useEffect } from 'react'
import { useContractWrite, useAccount } from 'wagmi'
import { AbyUsdt, contract } from '@/utils/AbyContrat'
import { parseEther } from 'viem'
import { ButtonUI } from '@/components/ui/button'
import Loading from '@/components/Loading'
import { toast } from 'sonner'
import { useDispatch } from '@/lib/redux/hooks'
import { setWaitTransaction } from '@/lib/redux/feature/waitTransaction'

const EnableToken = (): JSX.Element => {
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
  return (
    <>
      <ButtonUI
        className='uppercase rounded-full w-full'
        onClick={() => {
          writeAsync({
            args: [contract, parseEther('0')]
          }).then(() => {
            setShown(true)
          }).catch(error => {
            setShown(true)
            console.log(error)
          })
        }
        }
      >
        Enable USDT
      </ButtonUI>
      {isLoading && <Loading />}
    </>
  )
}

export default EnableToken
