'use client'
import { useAccount } from 'wagmi'
import BalanceOf from './functionsContract/BalanceOf'
import Image from 'next/image'
import ClaimTokens from './functionsContract/ClaimFunction'
import CheckboxWithLine from './CheckboxWithLine'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import { useLanguage } from '@/app/languageProvider'

const ClaimSteps = (): JSX.Element => {
  const [balanceOf, setBalanceOf] = useState(0)
  const { language } = useLanguage()
  const { isConnected, isDisconnected } = useAccount()

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Claim your Unity tokens',
      es: 'Reclamar Tokens',
      pt: 'Reivindicar Tokens'
    },
    2: {
      en: 'Connect Wallet',
      es: 'Conectar billetera',
      pt: 'Conectar carteira'
    },
    3: {
      en: 'Connect the wallet you have purchased with',
      es: 'Reclamar Tokens',
      pt: 'Conecte-se à carteira com a qual você fez a compra.'
    },
    4: {
      en: 'Check Balance',
      es: 'Consultar saldo',
      pt: 'Consultar saldo'
    },
    5: {
      en: 'Check your current balance',
      es: 'Verificar su saldo actual',
      pt: 'Verifique seu saldo atual'
    },
    6: {
      en: 'Claim',
      es: 'Reclamar',
      pt: 'Reivindicar'
    },
    7: {
      en: 'Claim your Tokens',
      es: 'Reclamar Tokens',
      pt: 'Reivindicar Tokens'
    }
  }
  return (
    <div className="flex flex-col backdrop-blur justify-self-center bg-background/80 border shadow-sm rounded-3xl lg:w-3/4 w-full">
        <div className="h-16 flex items-center justify-center align-top rounded-3xl rounded-b-none w-full bg-azure-radiance-600 place-items-center">
          <p className="text-xl sm:text-2xl font-bold">{text[1][language]}</p>
        </div>
      <div className='py-4'>
        <div className="flex gap-2 place-items-center">
          <div className='flex flex-row gap-1 pt-2'>
            <CheckboxWithLine isConnected={isConnected} balanceOf={balanceOf ?? 0 } />
            <div className='flex h-full flex-col gap-10  pt-2'>
              <div className='flex flex-col gap-2'>
                <p className='text-md text-blue-500 font-bold'>{text[2][language]}</p>
                <p className='text-gray-500 text-xs'>{text[3][language]}</p>
                <ConnectButton label='Connect wallet' showBalance={false} accountStatus="address"></ConnectButton>
              </div>
              <div className='flex flex-col gap-1'>
                  <p className='text-md text-blue-500 font-bold'>{text[4][language]}</p>
                  <p className='text-gray-500 text-xs'>{text[5][language]}</p>
                  <div className='w-44 overflow-hidden border flex border-sky-500 rounded-2xl pl-3 items-center gap-2'>
                      <Image className='flex' src='/logo.png' alt='logo' width={30} height={30}></Image>
                      <BalanceOf isDisconnected={isDisconnected} balance={balanceOf} setBalanceOf={setBalanceOf}/>
                  </div>
              </div>
              <div className='w-full'>
                    <p className='text-md text-blue-500 font-bold'>{text[6][language]}</p>
                    <p className='text-gray-500 text-xs'>{text[7][language]}</p>
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
