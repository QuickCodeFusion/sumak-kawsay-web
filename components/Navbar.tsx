'use client'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from './ui/navigation-menu'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = (): React.JSX.Element => {
  return (
           <NavigationMenu className='w-full bg-black bg-opacity-55'>
                <NavigationMenuList className='w-screen flex justify-around p-2'>
                    <Image className='flex' src='/node.png' alt='logo' width={50} height={50}></Image>
                    <NavigationMenuItem className='flex justify-between gap-5'>
                        <ConnectButton label='Connect' showBalance={{ smallScreen: false, largeScreen: true }}></ConnectButton>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
  )
}

export default Navbar
