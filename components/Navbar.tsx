'use client'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from './ui/navigation-menu'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useSelector } from '@/lib/redux/hooks'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { useWaitForTransaction } from 'wagmi'
import IconFaceBook from './Icons/IconFaceBook'
import IconBinance from './Icons/IconBinance'
import IconInstagram from './Icons/IconInstagram'
import IconTelegram from './Icons/IconTelegram'

const networks = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com/TransformationalFestivals',
    image: <IconFaceBook/>
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/transformationalfestivals/?utm_source=qr&igsh=d29iY3Rld3kzc25u',
    image: <IconInstagram/>
  },
  {
    id: 3,
    title: 'Binance',
    url: 'https://www.binance.com/es/nft/item/82689062?unverified=1&fbclid=IwAR2yoQgi_fva_e3uw4bT5_UgJxgoq1sbv_fDuDXgO1B2weDMpBE-RXvwrfo',
    image: <IconBinance/>
  },
  {
    id: 4,
    title: 'Telegram',
    url: 'https://t.me/UnitySeedICO',
    image: <IconTelegram />
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
    }
  }, [status])
  return (
           <NavigationMenu className='w-full bg-opacity-55'>
                <NavigationMenuList className='w-screen flex justify-between px-8'>
                    <Image className='ring-8 bg-white rounded-full' src='/logo.png' alt='logo' width={50} height={50}></Image>
                    <NavigationMenuList className='flex justify-between gap-7 py-4 px-4'>
                    {networks.map((network) => (
                      <NavigationMenuItem className='hidden md:block' key={network.id}>
                        <Link href={network.url} target='_blank'>
                          <div className='hover:scale-110'>{network.image}</div>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                    { shouldRenderComponents &&
                        <ConnectButton label='Connect wallet' accountStatus={{
                          smallScreen: 'avatar',
                          largeScreen: 'full'
                        }} showBalance={{ smallScreen: true, largeScreen: true }}></ConnectButton>}
                    </NavigationMenuList>
                </NavigationMenuList>
            </NavigationMenu>
  )
}

export default Navbar
