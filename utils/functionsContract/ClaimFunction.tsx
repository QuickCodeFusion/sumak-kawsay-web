'use client'
import { useContractWrite, useAccount } from 'wagmi'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { ButtonUI } from '@/components/ui/button'
const ClaimTokens = ({ boolean }: { boolean: boolean }): JSX.Element => {
  const { address } = useAccount()
  const { data, isLoading, isSuccess, write, isError } = useContractWrite({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    account: address,
    functionName: 'claimTokens'
  })
  console.log(data)
  return (
      <div className='flex justify-center w-full'>
        <ButtonUI
          className='min-w-[280px] max-w-[500px] uppercase rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-none text-white'
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
