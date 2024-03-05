'use client'
import { useContractWrite, useAccount } from 'wagmi'
import { AbyContractAddress, contract } from '@/utils/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
const ClaimTokens = ({ boolean }: { boolean: boolean }): JSX.Element => {
  const { address } = useAccount()
  const { write } = useContractWrite({
    address: contract,
    abi: AbyContractAddress,
    account: address,
    functionName: 'claimTokens'
  })

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
