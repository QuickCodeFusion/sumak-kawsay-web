'use client'
import { ButtonModal } from './ButtonModal'
import NameToken from './functionsToken/NameToken'
import SymbolToken from './functionsToken/SymbolToken'
import BalanceOf from '@/components/functionsContract/BalanceOf'
import { useSelector } from '@/lib/redux/hooks'

const BuyInfo = (): JSX.Element => {
  const { currentPrice } = useSelector((state) => state.currentPrice)
  return (
        <div className='flex flex-col text-center justify-center items-center my-6 gap-4'>
            <ul className='[&>li]:border-b-2 [&>li]:flex [&>li]:justify-between w-full
            flex flex-col gap-4
            '>
                <li>
                    <p>Token Name</p>
                    <NameToken/>
                </li>
                <li>
                    <p>Token Symbol</p>
                    <SymbolToken/>
                </li>
                <li>
                    <p>Current Price</p>
                    {currentPrice} USDT
                </li>
                <li>
                    <p>Your Balance</p>
                    <BalanceOf/>
                </li>
            </ul>
            <ButtonModal/>
        </div>
  )
}

export default BuyInfo
