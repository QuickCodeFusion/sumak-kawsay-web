'use client'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from './ui/navigation-menu'
import { ButtonUI } from './ui/button'

const Navbar = (): React.JSX.Element => {
  return (
           <NavigationMenu className='w-full'>
                <NavigationMenuList className='w-screen flex justify-around p-2'>
                    <Image className='flex' src='/vercel.svg' alt='logo' width={100} height={100}></Image>
                    <NavigationMenuItem className='flex justify-between gap-2'>
                        <ButtonUI variant={'ghost'}>WHITEPAPER</ButtonUI>
                        <ButtonUI variant={'outline'}>WHITEPAPER</ButtonUI>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
  )
}

export default Navbar
