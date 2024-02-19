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
                    <p><NameToken/></p>
                </li>
                <li>
                    <p>Token Symbol</p>
                    <p><SymbolToken/></p>
                </li>
                <li>
                    <p>Current Price</p>
                    <p><CurrentPrice/></p>
                </li>
            </ul>
            <ButtonModal/>
        </div>
  )
}

export default BuyInfo
