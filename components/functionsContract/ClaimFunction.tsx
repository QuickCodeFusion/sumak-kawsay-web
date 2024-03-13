'use client'
import { useContractWrite, useAccount, useWaitForTransaction } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
import { toast } from 'sonner'
import { useEffect } from 'react'
const ClaimTokens = ({ boolean }: { boolean: boolean }): JSX.Element => {
  const { address } = useAccount()
  const { write, data } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'claimTokens'
  })
  const { status } = useWaitForTransaction({
    hash: data?.hash
  })
  console.log(status)
  useEffect(() => {
    if (status) {
      toast.success('UNITY transferred', {
        style: { background: 'green', color: '#FFF' }
      })
      window.location.reload()
    }
  }, [status])

  return (
      <div className='flex flex-row items-start p-3  w-full'>
        <ButtonUI
          className='uppercase w-3/4 bg-sky-500 rounded-2xl border-none text-white'
          variant={'outline'}
          disabled={!boolean}
          onClick={() => {
            write()
          }
          }
        >
          Claim
        </ButtonUI>
      </div>
  )
}

export default ClaimTokens
