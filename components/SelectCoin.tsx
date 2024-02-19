'use client'

import * as React from 'react'
import { ButtonUI } from '@/components/ui/button'
import {
  Popover,
  PopoverTrigger
} from '@/components/ui/popover'

export const SelectCoin = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <ButtonUI
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="col-span-2 justify-center gap-2 rounded-s-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 320 512"><path fill="#e2e3e4" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg> Ethereum
        </ButtonUI>
      </PopoverTrigger>
    </Popover>
  )
}
