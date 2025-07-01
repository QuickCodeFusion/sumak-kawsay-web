import ButtonCopy from './BotonCopy'
import { CopyIcon } from '@radix-ui/react-icons'
import DecimalToken from './functionsToken/DecimalToken'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { contractToken } from '@/utils/AbyContrat'
import { useLanguage } from '@/app/languageProvider'
import Link from 'next/link'
import Image from 'next/image'

const TokenAddress = ({ token, link }: { token: string, link: string }): JSX.Element => {
  return (
  <div className="flex items-center pb-2">
    <Link href={link}>
    <p className="font-bold truncate sm:text-xl md:w-full w-52">
      {token}
    </p>
    </Link>
    <ButtonCopy text={token}>
      <CopyIcon />
    </ButtonCopy>
  </div>
  )
}

const InfonToken = (): JSX.Element => {
  const { language } = useLanguage()
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Contract Address',
      es: 'Dirección del Contrato',
      pt: 'Direção do Contrato'
    },
    2: {
      en: 'Decimals',
      es: 'Decimales',
      pt: 'Decimais'
    },
    3: {
      en: 'Network',
      es: 'Red',
      pt: 'Rede'
    }
  }
  return (
    <Card className="relative bg-azure-radiance-500 border-none shadow-azure-radiance-900 shadow-lg flex flex-col md:flex-row justify-around -mt-64 md:-mt-72 mb-12 w-full max-w-64 md:max-w-screen-2xl rounded-3xl">
        <div className='md:flex-initial md:p-10 flex justify-center bg-cover object-cover'>
          <Image className='p-5 md:flex-auto' src={'/wiphala.webp'} alt='wiphala' height={270} width={270}/>
        </div>
        <div>
      <CardHeader className="flex flex-col items-center">
        <p>{text[1][language]}</p>
        <TokenAddress token={'GyQjvwvkhSQgaCA5Rwo3cAxNpd5jSgdRQna8QXrtFt27'} link={'https://solscan.io/token/GyQjvwvkhSQgaCA5Rwo3cAxNpd5jSgdRQna8QXrtFt27'}/>
        <TokenAddress token={contractToken} link={'https://polygonscan.com/token/0x248f2b2ca86dc1033be2df56e5481f4f8bbe8c89'}/>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:gap-16">
        <div className="grid place-items-center">
          <p>{text[2][language]}</p>
          <DecimalToken />
        </div>
        <div className="grid place-items-center truncate text-sm md:text-base">
          <p>{text[3][language]}</p>
          <Link
            className="underline underline-offset-2"
            target="_blank"
            href={
              'https://polygonscan.com/token/0x248f2b2ca86dc1033be2df56e5481f4f8bbe8c89'
            }
          >
            Polygon ERC-20
          </Link>
          <Link
            className="underline underline-offset-2"
            target="_blank"
            href={
              'https://sarafu.network/pools/0x4fA1572294d5cf6dbAEAfd2E7AC7deD41595842a'
            }
          >
            CELO Blockchain
          </Link>
          <Link
            className="underline underline-offset-2"
            target="_blank"
            href={
              'https://tools.smithii.io/launch/STO-Genesis-Offering'
            }
          >
            Solana Blockchain
          </Link>
        </div>
      </CardContent>
      <CardFooter className="text-center justify-center"></CardFooter>
      </div>
    </Card>
  )
}

export default InfonToken
