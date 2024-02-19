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
          <ButtonUI className='w-52 uppercase rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-none text-white' variant={'outline'}>buy now</ButtonUI>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[500px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-52 z-0">
            <div className="m-auto h-full w-96 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-b-full filter blur-3xl"></div>
        </div>
        <DialogHeader className='z-10 uppercase'>
          <DialogTitle >be an investor</DialogTitle>
          <DialogDescription className='text-white font-semibold flex gap-2'>
            balance: <BalanceOf />
          <DialogDescription className='text-white font-semibold flex gap-2'>
            balance: <BalanceOf />
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 z-10">
          <div className="grid grid-cols-5 gap-1 ">
            <Label htmlFor="amount" className='uppercase col-span-5'>amount</Label>
            <Input id="amount" type='number' onChange={handlesend} value={value.send} className="col-span-3 appearance-none rounded-e-none" /><SelectCoin/>
          </div>
          <div className="grid gap-1 z-10">
            <Label htmlFor="get-amount" className='uppercase'>amount</Label>
            <Input id="get-amount" type='number' value={value.amount !== 0 ? value.amount : ''} onChange={handleamount} className="col-span-3" />
          </div>
          <div className='grid divide-y divide-dashed gap-4'>
            <div className='flex justify-between w-full '><span>precio$</span><span>{currentPrice}</span></div>
            <div className='flex justify-between w-full '><span>Bonus </span><span>{((2.38 - currentPrice) / (2.38) * 100)}%</span></div>
            <div className='flex justify-between w-full '><span>Total Amount</span><span>{value.amount}</span></div>
          </div>
        </div>
        <DialogFooter >
          <BuyWrite amount={value.amount} reset={handleReset} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
