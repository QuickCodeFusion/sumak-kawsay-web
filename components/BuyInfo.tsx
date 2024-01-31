import { ButtonModal } from './ButtonModal'

const BuyInfo = (): JSX.Element => {
  return (
        <div className='flex flex-col text-center justify-center items-center my-6 gap-4'>
            <ul className='[&>li]:border-b-2 [&>li]:flex [&>li]:justify-between w-full
            flex flex-col gap-4
            '>
                <li>
                    <p>Token Name</p>
                    <p>GITTU TOKEN</p>
                </li>
                <li>
                    <p>Token Symbol</p>
                    <p>GITTU</p>
                </li>
                <li>
                    <p>Current Price</p>
                    <p>0.001 ETH</p>
                </li>
                <li>
                    <p>Next Stage Price</p>
                    <p>0.002 ETH</p>
                </li>
            </ul>
            <ButtonModal/>
        </div>
  )
}

export default BuyInfo
