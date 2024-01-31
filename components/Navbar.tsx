'use client'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from './ui/navigation-menu'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

const networks = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com/TransformationalFestivals',
    image: '/facebook.png'
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/transformationalfestivals/?utm_source=qr&igsh=d29iY3Rld3kzc25u',
    image: '/instagram.png'
  },
  {
    id: 3,
    title: 'Binance',
    url: 'https://www.binance.com/es/nft/item/82689062?unverified=1&fbclid=IwAR2yoQgi_fva_e3uw4bT5_UgJxgoq1sbv_fDuDXgO1B2weDMpBE-RXvwrfo',
    image: '/binance.png'
  }
]

const Navbar = (): React.JSX.Element => {
  return (
           <NavigationMenu className='w-full bg-opacity-55'>
                <NavigationMenuList className='w-screen flex justify-between px-8'>
                    <Image className='flex' src='/logo.png' alt='logo' width={50} height={50}></Image>
                    <NavigationMenuList className='flex justify-between gap-7 py-4 px-4'>
                    {networks.map((network) => (
                      <NavigationMenuItem key={network.id}>
                        <Link href={network.url} target='_blank'>
                          <Image src={network.image} alt={network.title} width={35} height={35}></Image>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                        <ConnectButton label='Connect wallet' accountStatus={{
                          smallScreen: 'avatar',
                          largeScreen: 'full'
                        }} showBalance={{ smallScreen: true, largeScreen: true }}></ConnectButton>
                    </NavigationMenuList>
                </NavigationMenuList>
            </NavigationMenu>
  )
}

export default Navbar
