'use client'
import { ButtonModal } from './ButtonModal'
import NameToken from '../utils/functionsToken/NameToken'
import SymbolToken from '@/utils/functionsToken/SymbolToken'
import CurrentPrice from '@/utils/functionsContract/CurrentPrice'

const BuyInfo = (): JSX.Element => {
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
                    <CurrentPrice/>
                </li>
            </ul>
            <ButtonModal/>
        </div>
  )
}

export default BuyInfo
