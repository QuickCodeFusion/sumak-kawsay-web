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
import LanguageButton from './LanguageButton'
import { useLanguage } from '@/app/languageProvider'

const items: Array<{
  id: number
  title: Record<string, string>
  url: string
}> = [
  {
    id: 0,
    title: {
      en: 'Ecosystem',
      es: 'Ecosistema',
      pt: 'Ecossistema'
    },
    url: 'Ecosystem'
  },
  {
    id: 1,
    title: {
      en: 'Tokenomics',
      es: 'Tokenomics',
      pt: 'Tokenomics'
    },
    url: 'tokenomics'
  },
  {
    id: 2,
    title: {
      en: 'Roadmap',
      es: 'Hoja de ruta',
      pt: 'Roteiro'
    },
    url: 'roadMap'
  },
  // {
  //   id: 3,
  //   title: {
  //     en: 'Team',
  //     es: 'Equipo',
  //     pt: 'Equipe'
  //   },
  //   url: 'teamWork'
  // },
  {
    id: 4,
    title: {
      en: 'FAQ',
      es: 'FAQ',
      pt: 'FAQ'
    },
    url: 'faq'
  }
]

const Navbar = (): React.JSX.Element => {
  const { waitTransaction } = useSelector(state => state.waitTransaction)

  const { status } = useWaitForTransaction({
    hash: waitTransaction
  })

  const { language } = useLanguage()

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
                          {item.title[language]}
                        </ButtonUI>
                      </ScrollLink>
                    ))
                  }
                </div>
                </NavigationMenuList>
                <NavigationMenuList className='flex justify-end gap-2 py-4 px-4'>
                  <LanguageButton/>
                  <ToggleOwner/>
                  <ModeToggle/>
                    <ConnectButton label={language === 'es' ? 'Conectar billetera' : language === 'en' ? 'Connect wallet' : 'Conectar carteira' } accountStatus={{
                      smallScreen: 'avatar',
                      largeScreen: 'full'
                    }} showBalance={{ smallScreen: true, largeScreen: true }}></ConnectButton>
                </NavigationMenuList>
            </NavigationMenuList>
        </NavigationMenu>
    </>
  )
}

export default Navbar
