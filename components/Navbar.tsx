'use client'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuList
} from './ui/navigation-menu'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useSelector } from '@/lib/redux/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { useWaitForTransaction } from 'wagmi'
import { Link as ScrollLink } from 'react-scroll'
import { ButtonUI } from './ui/button'
import { ModeToggle } from './ToggleTheme'
import { ToggleOwner } from './ToggleOwner'

const items = [
  {
    id: 0,
    title: 'Ecosystem',
    url: 'Ecosystem'
  },
  {
    id: 1,
    title: 'Tokenomics',
    url: 'tokenomics'
  },
  {
    id: 2,
    title: 'Roadmap',
    url: 'roadMap'
  },
  {
    id: 3,
    title: 'Team',
    url: 'teamWork'
  },
  {
    id: 4,
    title: 'FAQ',
    url: 'faq'
  }
]

const currentDate = new Date()
const stopRenderingDate = new Date('2024-04-01')

const shouldRenderComponents = currentDate < stopRenderingDate

const Navbar = (): React.JSX.Element => {
  const { waitTransaction } = useSelector(state => state.waitTransaction)
  const { status } = useWaitForTransaction({
    hash: waitTransaction
  })

  useEffect(() => {
    if (status === 'success') {
      toast.success(
        'Compra Exitosa', {
          style: { background: 'green', color: '#FFF' }
        }
      )
      window.location.reload()
    }
  }, [status])

  return (
    <>
        <NavigationMenu className='w-full bg-withe fixed backdrop-blur bg-background/50 shadow-md z-50'>
            <NavigationMenuList className='w-screen grid grid-cols-3 justify-between px-8'>
                <Image className='rounded-full' src='/logo.png' alt='logo' width={50} height={50}></Image>
                <NavigationMenuList>
                <div className='sm:flex gap-4 hidden items-center justify-center'>
                  {
                    items.map((item) => (
                      <ScrollLink activeClass='active' to={item.url} spy smooth={true} duration={600} key={item.id}>
                        <ButtonUI className='bg-transparent hover:bg-background rounded-3xl text-foreground'>
                          {item.title}
                        </ButtonUI>
                      </ScrollLink>
                    ))
                  }
                </div>
                </NavigationMenuList>
                <NavigationMenuList className='flex justify-end gap-2 py-4 px-4'>
                  <ToggleOwner/>
                  <ModeToggle/>
                { shouldRenderComponents &&
                    <ConnectButton label='Connect wallet' accountStatus={{
                      smallScreen: 'avatar',
                      largeScreen: 'full'
                    }} showBalance={{ smallScreen: true, largeScreen: true }}></ConnectButton>}
                </NavigationMenuList>
            </NavigationMenuList>
        </NavigationMenu>
    </>
  )
}

export default Navbar
