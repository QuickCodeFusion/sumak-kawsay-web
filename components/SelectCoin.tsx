'use client'

import * as React from 'react'
import { ButtonUI } from '@/components/ui/button'
import {
  Popover,
  PopoverTrigger
} from '@/components/ui/popover'
import USDTicon from '@/public/usdt.png'
import Image from 'next/image'

export const SelectCoin = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ButtonUI
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="col-span-2 justify-center gap-2 rounded-s-none bg-[#FFF3DD] text-black"
        >
          <Image src={USDTicon} width={25} alt="USDT" /> USDT
        </ButtonUI>
      </PopoverTrigger>
    </Popover>
  )
}
