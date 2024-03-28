'use client'
import { ButtonModal } from './ButtonModal'
import NameToken from './functionsToken/NameToken'
import SymbolToken from './functionsToken/SymbolToken'
import BalanceOf from '@/components/functionsContract/BalanceOf'
import { useSelector } from '@/lib/redux/hooks'
import { ListCard, ListCardContent, ListItem } from './ui/list'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import Modal from './Modal'
import Link from 'next/link'
import { ButtonUI } from './ui/button'
import ValidateUsdt from './ValidateUsdt'
import { useLanguage } from '@/app/languageProvider'

const BuyInfo = (): JSX.Element => {
  const { currentPrice } = useSelector((state) => state.currentPrice)
  const [balance, setBalanceOf] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const { isDisconnected } = useAccount()
  const { language } = useLanguage()

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Token Symbol:',
      es: 'Símbolo del Token:',
      pt: 'Símbolo do Token:'
    },
    2: {
      en: 'Current Price:',
      es: 'Precio actual:',
      pt: 'Preço atual:'
    },
    3: {
      en: 'Listing price',
      es: 'Lista de precios',
      pt: 'Preço de listagem'
    },
    4: {
      en: 'Your Balance:',
      es: 'Tu Balance:',
      pt: 'Seu Saldo:'
    },
    5: {
      en: 'Enable Usdt',
      es: 'Habilitar Usdt',
      pt: 'Habilitar Usdt'
    },
    6: {
      en: 'How to buy',
      es: 'Como comprar',
      pt: 'Como comprar'
    }
  }

  return (
        <div className='flex flex-col text-center justify-center items-center my-6 gap-4'>
            <ListCard className='p-4'>
                <ListItem>
                <h1 className='text-lg font-medium'>{text[1][language]}</h1>
                    <ListCardContent>
                    <SymbolToken />
                    </ListCardContent>
                </ListItem>
                <ListItem>
                <h1 className='text-lg font-medium'>{text[2][language]}</h1>
                    <ListCardContent>
                        ${currentPrice}
                    </ListCardContent>
                </ListItem>
                <ListItem>
                    <h1 className='text-lg font-medium'>{text[3][language]}</h1>
                    <ListCardContent>
                    <NameToken />
                    </ListCardContent>
                </ListItem>
                <ListItem>
                <h1 className='text-lg font-medium'>{text[4][language]}</h1>
                    <ListCardContent>
                    <BalanceOf isDisconnected={isDisconnected} setBalanceOf={setBalanceOf} balance={balance}/>
                    </ListCardContent>
                </ListItem>
            </ListCard>
            <div className='flex flex-col md:grid grid-cols-2 gap-4 justify-center items-center place-items-center w-full px-4'>
                    <ButtonUI className='text-black w-full uppercase rounded-full bg-white border-none hover:bg-stone-400' onClick={() => { setIsOpen(true) }}>{text[5][language]}</ButtonUI>
                      <Modal className='bg-background/50 backdrop-blur' setOpen={setIsOpen} open={isOpen}>
                        <ValidateUsdt setIsOpen={setIsOpen}/>
                      </Modal>
                    <ButtonModal/>
                    <Link target='_blank' href={'https://www.transformationalfestivals.net/howtopurchase'} className='w-fit self-end text-azure-radiance-500 bg-transparent underline col-start-2 relative md:left-8 top-6 hover:bg-transparent'>{text[6][language]}</Link>
            </div>
        </div>
  )
}

export default BuyInfo
