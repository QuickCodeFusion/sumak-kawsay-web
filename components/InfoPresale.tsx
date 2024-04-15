import Link from 'next/link'
import IconSocial from './IconSocial'
import { ButtonUI } from './ui/button'
import { useLanguage } from '@/app/languageProvider'
const InfoPresale = (): JSX.Element => {
  const items: Array<{
    id: number
    title: Record<string, string>
    link: string
  }> = [
    {
      id: 3,
      title: {
        en: 'Whitepaper',
        es: 'Whitepaper',
        pt: 'Whitepaper'
      },
      link: 'https://www.transformationalfestivals.net/whitepaper'
    },
    {
      id: 2,
      title: {
        en: 'Marketplace',
        es: 'Mercado',
        pt: 'Mercado'
      },
      link: 'https://www.binance.com/es/nft/my-nfts/collected/symbiosls-0319e09553f7b3842d72b6435a287e3c'
    },
    {
      id: 1,
      title: {
        en: 'Hub',
        es: 'Hub',
        pt: 'Hub'
      },
      link: 'https://www.transformationalfestivals.net/member/account'
    }
  ]

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'The Ultimate Living and Virtual Ecosystem',
      es: 'El Ecosistema virtual y vivo definitivo',
      pt: 'O Ecosistema virtual e vivo definitivo'
    },
    2: {
      en: 'Experience a new era of community-driven wealth, where every participant has the power to shape the future.',
      es: 'Experimenta una nueva era de riqueza impulsada por la comunidad, donde cada participante tiene el poder de dar forma al futuro.',
      pt: 'Experimente uma nova era de riqueza impulsionada pela comunidade, onde cada participante tem o poder de moldar o futuro.'
    },
    3: {
      en: 'Audited & KYC | 100% secure and verified',
      es: 'Auditado & KYC | 100% seguro y verificado',
      pt: 'Auditado & KYC | 100% seguro e verificado'
    }
  }

  const { language } = useLanguage()

  return (
          <div className='flex place-self-start md:text-white justify-center items-start flex-col gap-4 col-span-2 md:px-36 mb-12'>
                <IconSocial/>
              <h1 className='text-2xl text-white md:text-6xl font-bold text-start'>
                {text[1][language]}
              </h1>
              <p className='text-md md:text-2xl text-white text-start font-semibold'>{text[2][language]}</p>
              <span className='w-full grid grid-cols-1 place-items-center sm:grid-cols-3 gap-1 md:gap-4 md:max-w-[400px] justify-center items-center'>
                {items.map((item) => {
                  return (
                    <ButtonUI className='w-48 md:w-full rounded-full border-2 border-none' key={item.id}>
                      <Link href={item.link} rel='noreferrer' target='_blank'>
                        {item.title[language]}
                      </Link>
                    </ButtonUI>
                  )
                })}
              </span>
              <Link href='https://www.dx.app/dxlock/view/token-locker?address=0x7f9c87a16ce7d357b958a69ded86bfe18a0804db&chain=137' target='_blank' className='underline text-white'>{text[3][language]}</Link>
          </div>
  )
}

export default InfoPresale
