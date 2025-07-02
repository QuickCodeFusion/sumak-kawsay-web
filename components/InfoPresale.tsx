import Link from 'next/link'
import IconSocial from './IconSocial'
import { ButtonUI } from './ui/button'
import { useLanguage } from '@/app/languageProvider'
const InfoPresale = (): JSX.Element => {
  const items: Array<{
    id: number
    title: Record<string, string>
    link: string
    target?: string
  }> = [
    {
      id: 3,
      title: {
        en: 'Whitepaper',
        es: 'Whitepaper',
        pt: 'Whitepaper'
      },
      link: 'https://drive.google.com/file/d/1qEfptDZpTYF3-T_2SsJCTLke1HVHCvUK/view?usp=drivesdk',
      target: '_blank'
    },
    {
      id: 2,
      title: {
        en: 'Hub',
        es: 'Hub',
        pt: 'Hub'
      },
      link: 'https://dao.hypha.earth/abya-yala/'
    },
    {
      id: 1,
      title: {
        en: 'Ayni',
        es: 'Ayni',
        pt: 'Ayni'
      },
      link: 'https://raydium.io/swap/?inputMint=sol&outputMint=GyQjvwvkhSQgaCA5Rwo3cAxNpd5jSgdRQna8QXrtFt27&referrer=5rQra4Wh9tVu6cdmPuFUan9bmGsuAvqNDTp6Z9YD9ipe'
    }
  ]

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'A Global Network of Regenerative Capital',
      es: 'Una Red Global de Capital Regenerativo',
      pt: 'Uma Rede Global de Capital Regenerativo'
    },
    2: {
      en: 'Direct, decentralized access to financial opportunities and governance empowering you, wherever you are, to cocreate the world you envision.',
      es: 'Acceso directo y descentralizado a instrumentos de inversión & APY competitivo desde cualquier lugar del mundo',
      pt: 'Acesso direto e descentralizado aos ativos financeiros & APY competitivo de qualquer lugar do mundo'
    },
    3: {
      en: 'Audited & KYC | 100% secure and verified',
      es: 'Auditado & KYC | 100% seguro y verificado',
      pt: 'Auditado & KYC | 100% seguro e verificado'
    }
  }

  const { language } = useLanguage()

  return (
          <div className='flex place-self-start text-foreground justify-center items-start flex-col gap-4 col-span-2 md:px-36 mb-12 '>
                <IconSocial className='[&_svg]:fill-background-color'/>
              <h1 className='text-2xl md:text-6xl font-bold text-start'>
                {text[1][language]}
              </h1>
              <p className='text-md md:text-2xl text-start font-semibold'>{text[2][language]}</p>
              <span className='w-full grid grid-cols-1 place-items-center sm:grid-cols-3 gap-1 md:gap-4 md:max-w-[400px] justify-center items-center'>
                {items.map((item) => {
                  return (
                    <ButtonUI className='w-48 md:w-full rounded-full border-2 border-none' key={item.id}>
                      <Link href={item.link} rel='noreferrer' target={item.target} >
                        {item.title[language]}
                      </Link>
                    </ButtonUI>
                  )
                })}
              </span>
              <Link href='https://app.streamflow.finance/contract/solana/mainnet/DZvuN7RjpQTrZ4RNccQPemN5zPcSQ9NKU4eGqCbRxQZ2' target='_blank' className='underline text-white'>{text[3][language]}</Link>
          </div>
  )
}

export default InfoPresale
