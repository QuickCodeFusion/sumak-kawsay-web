import Link from 'next/link'
import IconFaceBook from './Icons/IconFaceBook'
import IconBinance from './Icons/IconBinance'
import IconInstagram from './Icons/IconInstagram'
import IconTelegram from './Icons/IconTelegram'
import { IconDiscord } from './Icons/IconDiscord'
import { IconTwiter } from './Icons/IconTwiter'
const networks = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100080135048785',
    image: <IconFaceBook />
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/unifying.earth',
    image: <IconInstagram />
  },
  {
    id: 3,
    title: 'Binance',
    url: 'https://www.binance.com/es/nft/item/82689062?unverified=1&fbclid=IwAR2yoQgi_fva_e3uw4bT5_UgJxgoq1sbv_fDuDXgO1B2weDMpBE-RXvwrfo',
    image: <IconBinance />
  },
  {
    id: 4,
    title: 'Telegram',
    url: 'https://t.me/UnitySeedICO',
    image: <IconTelegram />
  },
  {
    id: 5,
    title: 'Twitter',
    url: 'https://twitter.com/UNITYSEED',
    image: <IconTwiter />
  },
  {
    id: 6,
    title: 'Discord',
    url: 'https://discord.com/invite/NkB7Amd7Tx',
    image: <IconDiscord />
  }
]
const IconSocial = (): JSX.Element => {
  return (
        <div className='grid grid-cols-6 w-fit gap-6'>{networks.map((network) => (
              <Link key={network.id} className='w-6'
               href={network.url} target='_blank'>
                {network.image}
              </Link>
        ))}</div>
  )
}

export default IconSocial
