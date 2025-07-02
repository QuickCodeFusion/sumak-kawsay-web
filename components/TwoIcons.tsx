import Link from 'next/link'
import { IconTwiter } from './Icons/IconTwiter'
import { FolderClosed } from 'lucide-react'
const networks = [
  {
    id: 3,
    title: 'Binance',
    url: 'https://docs.google.com/presentation/d/1wp1xOCv4lLSnV9syReljiLlK3ZVL3ud-Cy3a9XamkPE/edit?usp=sharing',
    image: <FolderClosed/>
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
