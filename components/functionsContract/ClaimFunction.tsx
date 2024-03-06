'use client'
import { useContractWrite, useAccount } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
const ClaimTokens = ({ boolean }: { boolean: boolean }): JSX.Element => {
  const { address } = useAccount()
  const { data, isLoading, isSuccess, write, isError } = useContractWrite({
    address: '0xC531027f80f579a4a9Ce442d8DAeD85960096D7f',
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
        {isLoading && <div>Check Wallet...</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        {isError && <div>Error: {JSON.stringify(isError)}</div>}
      </div>
  )
}

export default ClaimTokens
