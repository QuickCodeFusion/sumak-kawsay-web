'use client'

import * as React from 'react'
import ReclaimUsdt from './functionsContract/ReclaimUsdt'
import SwitchPhase from './functionsContract/SwitchPhase'
import ClosePresale from './functionsContract/ClosePresale'
import { BoltIcon } from 'lucide-react'
import { useAccount } from 'wagmi'
import { useOwner } from '@/utils/useOwner'
import ModalConfirmation from './ModalConfirmation'
import { useState } from 'react'

import { ButtonUI } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const ToggleOwner = (): React.JSX.Element => {
  const [open, setOpen] = useState(false)
  const owner = useOwner()
  const { address } = useAccount()
  if (owner !== address || !owner) {
    return <></>
  }
  return (
    <DropdownMenu>
      <ModalConfirmation open={open} setOpen={setOpen} writeAsync={ReclaimUsdt} setShown={setOpen}/>
      <DropdownMenuTrigger asChild>
        <ButtonUI variant="outline" size="icon" className='min-w-[2.5rem] bg-background/65 border-none'>
          <BoltIcon />
        </ButtonUI>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex'>
        <DropdownMenuItem >
            <ReclaimUsdt/>
        </DropdownMenuItem>
        <DropdownMenuItem >
            <SwitchPhase/>
        </DropdownMenuItem>
        <DropdownMenuItem >
            <ClosePresale open={open} setOpen={setOpen}/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
