import Link from 'next/link'
import IconBinance from './Icons/IconBinance'
import { IconTwiter } from './Icons/IconTwiter'
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
  }
]
const TwoIcons = (): JSX.Element => {
  return (
        <div className='flex flex-row w-fit gap-6 rounded-full p-2 '>{networks.map((network) => (
              <Link key={network.id} className='w-6'
               href={network.url} target='_blank'>
                {network.image}
              </Link>
        ))}</div>
  )
}

export default TwoIcons
