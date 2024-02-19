'use client'
import { useContractWrite, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { ButtonUI } from '@/components/ui/button'

const BuyWrite = ({ send, amount }: { send: number, amount: number }): JSX.Element => {
  const { address } = useAccount()
  const { data, isLoading, isSuccess, write, isError } = useContractWrite({
    address: '0x8533C3C16163cCddEB23F21746c9EdA6bfa7BE5B',
    abi: AbyContractAddress,
    account: address,
    functionName: 'buy'
  })

  return (
    <div className='flex justify-center w-full'>
      <ButtonUI
        className='w-52 uppercase rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-none text-white'
        variant={'outline'}
        disabled={!write}
        onClick={() => {
          write({
            value: parseEther(send.toString()),
            args: [amount]
          })
        }
        }
      >
        aprove
      </ButtonUI>
      {isLoading && <div>Check Wallet...</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      {isError && <div>Error: {JSON.stringify(isError)}</div>}
    </div>
  )
}

export default BuyWrite
