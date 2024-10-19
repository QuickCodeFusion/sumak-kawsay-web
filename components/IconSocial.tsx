import Link from 'next/link'
import IconFaceBook from './Icons/IconFaceBook'
import IconBinance from './Icons/IconBinance'
import IconInstagram from './Icons/IconInstagram'
import IconTelegram from './Icons/IconTelegram'
import { IconDiscord } from './Icons/IconDiscord'
import { IconTwiter } from './Icons/IconTwiter'
import { IconYoutube } from './Icons/IconYoutube'
const networks = [
  {
    id: 3,
    title: 'Binance',
    url: 'https://www.binance.com/es/nft/profile/symbiosls-0319e09553f7b3842d72b6435a287e3c',
    image: <IconBinance />
  },
  {
    id: 5,
    title: 'Twitter',
    url: 'https://twitter.com/UNITYSEED',
    image: <IconTwiter />
  },
  {
    id: 4,
    title: 'Telegram',
    url: 'https://t.me/UnifyingEarth',
    image: <IconTelegram />
  },
  {
    id: 6,
    title: 'Discord',
    url: 'https://discord.com/invite/NkB7Amd7Tx',
    image: <IconDiscord />
  },
  {
    id: 7,
    title: 'Youtube',
    url: 'https://www.youtube.com/channel/UC_WoaXT-oIsUjV7ATBJ0dqQ',
    image: <IconYoutube />
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/unifying.earth',
    image: <IconInstagram />
  },
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100080135048785',
    image: <IconFaceBook />
  }
]
const IconSocial = (): JSX.Element => {
  return (
        <div className='grid grid-cols-7 w-fit gap-6 rounded-full p-2 '>{networks.map((network) => (
              <Link key={network.id} className='w-6 [&>svg]:stroke-primary-foreground [stroke-width:1px]'
               href={network.url} target='_blank'>
                {network.image}
              </Link>
        ))}</div>
  )
}

export default IconSocial
