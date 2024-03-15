'use client'
'use client'
import { ButtonUI } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/modal'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectCoin } from './SelectCoin'
import BalanceOf from '@/components/functionsContract/BalanceOf'
import { useSelector } from '@/lib/redux/hooks'
import { useEffect, useState } from 'react'
import BuyWrite from '@/components/functionsContract/BuyWrite'
import Link from 'next/link'
import { VerifyToken } from '@/utils/verifyToken'
import { validateBuy } from '@/utils/validation'
import { useAccount } from 'wagmi'

export const ButtonModal = (): React.JSX.Element => {
  const [balance, setBalanceOf] = useState(0)
  const { isDisconnected } = useAccount()
  const { currentPrice } = useSelector((state) => state.currentPrice)
  const [value, setValue] = useState({
    send: 0,
    amount: 0
  })
  const test = VerifyToken()
  const handlesend = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue({
      send: Number(event.target.value),
      amount: (Number(event.target.value) / currentPrice)
    })
  }
  const handleamount = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue({
      send: Number(event.target.value) * currentPrice,
      amount: Number(event.target.value)
    })
  }
  const handleReset = (): void => {
    setValue({
      send: 0,
      amount: 0
    })
  }
  useEffect(() => {
    console.log(value, test)
  }, [balance, currentPrice, value.send])
  return (
    <Dialog >
        <DialogTrigger asChild>
          <ButtonUI className='w-full uppercase rounded-full bg-azure-radiance-500 border-none hover:bg-azure-radiance-400'>buy now</ButtonUI>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] overflow-hidden bg-background/50 backdrop-blur">
        <DialogHeader className='z-10 uppercase'>
          <DialogTitle >be an investor</DialogTitle>
          <DialogDescription className='font-semibold flex gap-2 justify-between'>
            <div className='flex'>balance: <BalanceOf isDisconnected={isDisconnected} setBalanceOf={setBalanceOf} balance={balance} /></div>
            {VerifyToken()} USDT
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 z-10">
          <div className="grid grid-cols-5 gap-1 ">
            <Label htmlFor="amount" className='uppercase col-span-5 '>USDT Pay</Label>
            <Input onChange={handlesend} value={value.send >= 0 ? value.send : 0} className="col-span-3 appearance-none rounded-e-none" /><SelectCoin/>
          </div>
          <div className="grid gap-1 z-10 h-15">
            <Label htmlFor="get-amount" className='uppercase'>UNITY To receive </Label>
            <Input value={value.amount !== 0 ? value.amount : ''} onChange={handleamount} className="col-span-3 appearance-none"/>
            <p className='h-5 text-red-700'>{validateBuy(VerifyToken(), value.amount, value.send)}</p>
          </div>
          <div className='grid divide-y divide-dashed gap-4'>
            <div className='flex justify-between w-full '><span>price $</span><span>{currentPrice}</span></div>
            <div className='flex justify-between w-full '><span>Bonus </span><span>70%</span></div>
            <div className='flex justify-between w-full '><span>Total Amount</span><span>{value.amount}</span></div>
          </div>
        </div>
        <DialogFooter className='relative' >
          <BuyWrite send={value.send} amount={value.amount} reset={handleReset} />
          <div>
          <Link className='absolute right-0 -bottom-5 text-azure-radiance-500 bg-transparent underline  hover:bg-transparent' href='https://www.transformationalfestivals.net/product-page/unityicopresale'>
            Buy with card
          </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
