import Link from 'next/link'
import ButtonWhitePaper from './ButtonWhiterPaper'
import IconSocial from './IconSocial'
import { ButtonUI } from './ui/button'
const InfoPresale = (): JSX.Element => {
  const items = [
    {
      id: 1,
      title: 'Hub',
      link: 'http://transformationalfestivals.net/'
    },
    {
      id: 2,
      title: 'Marketplace',
      link: 'https://www.binance.com/es/nft/my-nfts/collected/symbiosls-0319e09553f7b3842d72b6435a287e3c'
    }
  ]
  return (
          <div className='flex justify-center items-center flex-col md:gap-4'>
                <IconSocial/>
              <h1 className='text-xl md:text-3xl font-bold text-center'>
                Embracing the Renaissance of Prosperity in the Sumak Kawsay.
                Co-creating a World of Harmony and Abundance
              </h1>
              <div className='my-9'>
              <p className='text-md md:text-xl text-center font-semibold'>A transformation that begins with you and resonates across the globe</p>
              <p className='text-center md:p-4'>The Sumak Kawsay Ecosystem blends asset tokenization, artificial intelligence, decentralized governance, and privacy, fostering a legal and political framework for global articulation, collective prosperity, and sovereignty.</p>
              </div>
              <span className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
                {items.map((item) => {
                  return (
                    <ButtonUI className='rounded-full border-2' key={item.id}>
                      <Link href={item.link} target='_blank' rel='noreferrer'>
                        {item.title}
                      </Link>
                    </ButtonUI>
                  )
                })}
                <ButtonWhitePaper/>
              </span>
          </div>
  )
}

export default InfoPresale
