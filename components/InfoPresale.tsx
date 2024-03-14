import Link from 'next/link'
import ButtonWhitePaper from './ButtonWhiterPaper'
import IconSocial from './IconSocial'
import { ButtonUI } from './ui/button'
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
          <div className='flex place-self-start text-white justify-center items-start flex-col gap-4 col-span-2 md:px-36 mb-12'>
                <IconSocial/>
              <h1 className='text-2xl md:text-6xl font-bold text-start'>
              The Ultimate Living and Virtual Ecosystem
              </h1>
              <p className='text-md md:text-2xl text-start font-semibold'>Experience a new era of community-driven wealth, where every participant has the power to shape the future.</p>
              <span className='w-full grid grid-cols-3 gap-1 md:gap-4 md:max-w-[400px] justify-center items-center'>
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
              <p className='underline'>Audited & KYC | 100% secure and verified</p>
          </div>
  )
}

export default InfoPresale
