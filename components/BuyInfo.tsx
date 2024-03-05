'use client'
import { ButtonModal } from './ButtonModal'
import NameToken from './functionsToken/NameToken'
import SymbolToken from './functionsToken/SymbolToken'
import BalanceOf from '@/components/functionsContract/BalanceOf'
import { useSelector } from '@/lib/redux/hooks'
import { ListCard, ListCardContent, ListItem } from './ui/list'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import EnableToken from './functionsToken/EnableToken'

const BuyInfo = (): JSX.Element => {
  const { currentPrice } = useSelector((state) => state.currentPrice)
  const [balance, setBalanceOf] = useState(0)
  const { isDisconnected } = useAccount()
  return (
        <div className='flex flex-col text-center justify-center items-center my-6 gap-4'>
            <ListCard>
                <ListItem>
                    <h1 className='text-lg font-medium'>Token Name:</h1>
                    <ListCardContent>
                    <NameToken />
                    </ListCardContent>
                </ListItem>
                <ListItem>
                <h1 className='text-lg font-medium'>Token Symbol:</h1>
                    <ListCardContent>
                    <SymbolToken />
                    </ListCardContent>
                </ListItem>
                <ListItem>
                <h1 className='text-lg font-medium'>Current Price:</h1>
                    <ListCardContent>
                    {currentPrice}
                    </ListCardContent>
                </ListItem>
                <ListItem>
                <h1 className='text-lg font-medium'>Your Balance:</h1>
                    <ListCardContent>
                    <BalanceOf isDisconnected={isDisconnected} setBalanceOf={setBalanceOf} balance={balance}/>
                    </ListCardContent>
                </ListItem>
            </ListCard>
            <div className='flex gap-4'>
                <EnableToken/>
                <ButtonModal/>
            </div>
        </div>
  )
}

export default BuyInfo
