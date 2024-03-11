import Link from 'next/link'
import ButtonWhitePaper from './ButtonWhiterPaper'
import IconSocial from './IconSocial'
import { ButtonUI } from './ui/button'
import Image from 'next/image'
const InfoPresale = (): JSX.Element => {
  const items = [
    {
      id: 2,
      title: 'Marketplace',
      link: 'https://www.binance.com/es/nft/my-nfts/collected/symbiosls-0319e09553f7b3842d72b6435a287e3c'
    },
    {
      id: 1,
      title: 'Hub',
      link: 'http://transformationalfestivals.net/'
    }
  ]
  return (
          <div className='flex place-self-start text-white justify-center items-start flex-col md:gap-4 col-span-2'>
                <IconSocial/>
              <h1 className='text-xl md:text-3xl font-bold text-start'>
              The Ultimate Living and Virtual Ecosystem
              </h1>
              <p className='text-md md:text-xl text-start font-semibold'>Experience a new era of community-driven wealth, where every participant has the power to shape the future.</p>
              <Image src={'/ctk.png'} className='h-fit' alt='logo' width={200} height={500}></Image>
              <span className='w-full flex flex-col md:grid grid-cols-3 md:w-1/2 justify-center items-center gap-4'>
                <ButtonWhitePaper/>
                {items.map((item) => {
                  return (
                    <ButtonUI className='w-full rounded-full border-2' key={item.id}>
                      <Link href={item.link} target='_blank' rel='noreferrer'>
                        {item.title}
                      </Link>
                    </ButtonUI>
                  )
                })}
              </span>
          </div>
  )
}

export default InfoPresale
