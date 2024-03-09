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
import { useState } from 'react'
import BuyWrite from '@/components/functionsContract/BuyWrite'
import VerifyToken from './functionsToken/VerifyToken'
import Link from 'next/link'

export const ButtonModal = (): React.JSX.Element => {
  const { currentPrice } = useSelector((state) => state.currentPrice)
  const [value, setValue] = useState({
    send: 0,
    amount: 0
  })
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
  return (
    <Dialog >
      <div className='flex justify-center'>
        <DialogTrigger asChild>
          <ButtonUI className='w-52 uppercase rounded-full border-none'>buy now</ButtonUI>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[500px] overflow-hidden bg-background/50 backdrop-blur">
        <div className="absolute top-0 left-0 w-full h-52 z-0">
            <div className="m-auto h-full w-96 "></div>
        </div>
        <DialogHeader className='z-10 uppercase'>
          <DialogTitle >be an investor</DialogTitle>
          <DialogDescription className='font-semibold flex gap-2 justify-between'>
            <div className='flex'>balance: <BalanceOf /></div>
            <VerifyToken />
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 z-10">
          <div className="grid grid-cols-5 gap-1 ">
            <Label htmlFor="amount" className='uppercase col-span-5 '>USDT Pay</Label>
            <Input onChange={handlesend} value={value.send >= 0 ? value.send : 0} className="col-span-3 appearance-none rounded-e-none" /><SelectCoin/>
          </div>
          <div className="grid gap-1 z-10">
            <Label htmlFor="get-amount" className='uppercase'>UNITY To receive </Label>
            <Input value={value.amount !== 0 ? value.amount : ''} onChange={handleamount} className="col-span-3 appearance-none         " />
          </div>
          <div className='grid divide-y divide-dashed gap-4'>
            <div className='flex justify-between w-full '><span>precio$</span><span>{currentPrice}</span></div>
            <div className='flex justify-between w-full '><span>Bonus </span><span>{((2.38 - currentPrice) / (2.38) * 100)}%</span></div>
            <div className='flex justify-between w-full '><span>Total Amount</span><span>{value.amount}</span></div>
          </div>
        </div>
        <DialogFooter >
          <BuyWrite send={value.send} amount={value.amount} reset={handleReset} />
          <Link href='https://www.pinksale.finance/launchpad/0x3C419fC6E8a1e4ed49Ca4530758fc4a37d658fC6?chain=Matic'>
            <ButtonUI className='uppercase rounded-full bg-azure-radiance-700'>Buy with card</ButtonUI>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
