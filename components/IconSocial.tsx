import Link from 'next/link'
import IconFaceBook from './Icons/IconFaceBook'
import IconBinance from './Icons/IconBinance'
import IconInstagram from './Icons/IconInstagram'
import IconTelegram from './Icons/IconTelegram'
const networks = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com/TransformationalFestivals',
    image: <IconFaceBook />
  },
  {
    id: 2,
    title: 'Instagram',
    url: 'https://www.instagram.com/transformationalfestivals/?utm_source=qr&igsh=d29iY3Rld3kzc25u',
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
  }
]
const IconSocial = (): JSX.Element => {
  return (
        <div className='container flex justify-start gap-5'>{networks.map((network) => (
            <div key={network.id}>
              <Link href={network.url} target='_blank'>
                {network.image}
              </Link>
            </div>
        ))}</div>
  )
}

export default IconSocial
