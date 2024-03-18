'use client'
import React, { useState, useEffect } from 'react'
import { useContractWrite, useAccount, useWaitForTransaction } from 'wagmi'
import { AbyUsdt, contract, contractUSDT } from '@/utils/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
import Loading from '@/components/Loading'
import { toast } from 'sonner'
// import { useDispatch } from '@/lib/redux/hooks'
// import { setWaitTransaction } from '@/lib/redux/feature/waitTransaction'

const EnableToken = ({ value }: { value: string }): JSX.Element => {
  const tokeusdt = Number(value) * 10 ** 6
  // const dispatch = useDispatch()
  const { address } = useAccount()
  const [Shown, setShown] = useState(false)
  const [error, setError] = useState(false)

  const { isLoading, isSuccess, isError, writeAsync, data } = useContractWrite({
    address: contractUSDT,
    abi: AbyUsdt,
    account: address,
    functionName: 'approve'
  })
  const { status } = useWaitForTransaction({
    hash: data?.hash
  })
  useEffect(() => {
    if (isSuccess && data?.hash !== undefined && status !== 'success') {
      toast.loading(
        'processing', {
          style: { background: 'yellow', color: '#000' }
        }
      )
    }
    if (status === 'success') {
      toast.success(
        'USDT approved', {
          style: { background: 'green', color: '#FFF' }
        }
      )
      window.location.reload()
    }
    if ((isError && Shown) || error) {
      toast.error(
        'Connection Error. Try Again Later', {
          style: { background: 'red', color: '#FFF' }
        }
      )
      setShown(false)
      setError(false)
    }
  }, [isError, Shown, isSuccess, error, status])
  return (
    <>
      <ButtonUI
        className='uppercase rounded-full w-full'
        onClick={() => {
          writeAsync({
            args: [contract, tokeusdt]
          }).then(() => {
            setShown(true)
          }).catch(error => {
            setShown(true)
            console.log(error)
          })
        }
        }
      >
        approve
      </ButtonUI>
      {isLoading && <Loading />}
    </>
  )
}

export default EnableToken
