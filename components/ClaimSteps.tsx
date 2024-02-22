'use client'
import { useAccount } from 'wagmi'
import BalanceOf from './functionsContract/BalanceOf'
import Image from 'next/image'
import ClaimTokens from './functionsContract/ClaimFunction'
import CheckboxWithLine from './CheckboxWithLine'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'

const ClaimSteps = (): JSX.Element => {
  const [balanceOf, setBalanceOf] = useState(0)
  const { isConnected } = useAccount()

  return (
    <div className="flex flex-col bg-white rounded-3xl lg:w-1/3 w-full">
        <div className="h-16 flex items-center justify-center align-top rounded-3xl rounded-b-none w-full bg-amber-700/50 place-items-center">
          <p className="text-2xl font-bold">Claim your Unity tokens</p>
        </div>
      <div className='py-4'>
        <div className="flex gap-2 place-items-center">
          <div className='flex flex-row gap-1 pt-2'>
            <CheckboxWithLine isConnected={isConnected} balanceOf={balanceOf ?? 0 } />
            <div className='flex h-full flex-col gap-10  pt-2'>
              <div className='flex flex-col gap-2'>
                <p className='text-md text-blue-500 font-bold'>Connect Wallet</p>
                <p className='text-gray-500 text-xs'>Connect the wallet you have purchased with</p>
                <ConnectButton label='Connect wallet'showBalance={false} accountStatus="address"></ConnectButton>
              </div>
              <div className='flex flex-col gap-1'>
                  <p className='text-md text-blue-500 font-bold'>Check Balance</p>
                  <p className='text-gray-500 text-xs'>Check your current balance</p>
                  <div className='border flex border-sky-500 h-[35px] rounded-2xl pl-3 items-center gap-2'>
                      <Image className='flex' src='/logo.png' alt='logo' width={30} height={30}></Image>
                      <BalanceOf setBalanceOf={setBalanceOf}/>
                  </div>
              </div>
              <div className='w-full'>
                    <p className='text-md text-blue-500 font-bold'>Claim</p>
                    <p className='text-gray-500 text-xs'>Claim your tokens</p>
                    <ClaimTokens boolean={balanceOf !== null && balanceOf > 0}/>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ClaimSteps
