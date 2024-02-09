'use client'
import { Checkbox } from './ui/checkbox'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useSelector } from '@/lib/redux/hooks'
import BalanceOf from '@/utils/functionsContract/BalanceOf'
import Image from 'next/image'
import ClaimTokens from '@/utils/functionsContract/ClaimFunction'

const Claim = (): React.JSX.Element => {
  const { balanceOf } = useSelector((state) => state.balanceOf)
  const { isConnected } = useAccount()
  console.log(balanceOf)
  return (
        <div className='w-full grid place-items-center '>
            <div className="h-[4rem] w-full bg-sky-500/50 grid place-items-center">
                <p className="text-2xl font-bold">Claim your Unity tokens</p>
            </div>

            <div className="flex flex-col min-w-[350px] w-full gap-4 mt-10  ml-8 relative">
                <article className='w-[350px] flex gap-10'>
                <Checkbox checked={isConnected} className='h-[35px] w-[35px] rounded-full border-sky-500 '/>
                <div className='flex flex-col gap-1 pt-2'>
                    <p className='text-md text-blue-500 font-bold'>Connect Wallet</p>
                    <p className='text-gray-500 text-xs'>Connect the wallet you have purchased with</p>
                    <ConnectButton label='Connect wallet'showBalance={false} accountStatus="address"></ConnectButton>
                </div>
                </ article>
                <hr className={`tranform rotate-90 w-[78px] border absolute top-[73px] left-[-21px] ${isConnected ? 'border-sky-500' : 'border-gray-500'}`}/>
                <article className='w-[350px] flex gap-10'>
                <Checkbox checked={balanceOf > 0} className='h-[35px] w-[35px] rounded-full border-sky-500 '/>
                <div className='pt-2'>
                    <p className='text-md text-blue-500 font-bold'>Check Balance</p>
                    <p className='text-gray-500 text-xs'>Check your current balance</p>
                    <div className='border border-sky-500 h-[35px] min-w-[280px] max-w-[500px] rounded-2xl flex pl-3 items-center gap-2'>
                        <Image className='flex' src='/logo.png' alt='logo' width={30} height={30}></Image>
                        <p className='text-black font-bold'><BalanceOf/></p>
                    </div>
                </div>
                </ article>
                <hr className={`tranform rotate-90 w-[78px] border absolute top-[185px] left-[-21px] ${balanceOf > 0 ? 'border-sky-500' : 'border-gray-500'}`}/>
                <article className='w-[350px] flex gap-10'>
                <Checkbox checked={balanceOf > 0} className='h-[35px] w-[35px] rounded-full border-sky-500 '/>
                <div className='pt-2'>
                    <p className='text-md text-blue-500 font-bold'>Claim</p>
                    <p className='text-gray-500 text-xs'>Claim your tokens</p>
                    <ClaimTokens boolean={balanceOf > 0}/>
                </div>
                </ article>
            </div>

        </div>
  )
}

export default Claim
