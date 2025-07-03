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
    <Link href={link} target='_blank'>
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
      en: 'Token Lock',
      es: 'Certificado de Bloqueo',
      pt: 'Token Lock'
    }
  }
  return (
    <Card className="relative bg-azure-radiance-500 border-none shadow-azure-radiance-900 shadow-lg flex flex-col-reverse lg:grid md:grid-cols-4 md:grid-rows-1 justify-around -mt-64 md:-mt-72 mb-12 w-full md:max-w-screen-2xl rounded-3xl">
        <div className='md:columns-1 pb-10 pl-0 md:pl-0 md:p-10 flex justify-center items-center bg-cover object-cover order-first'>
          <Image className=' md:flex-initial size-28' src={'/wiphala.webp'} alt='wiphala' height={200} width={200}/>
        </div>
      <CardHeader className="flex flex-col items-center col-span-2 backdrop-blur-sm order-last md:-order-2">
        <p>{text[1][language]}</p>
        <TokenAddress token={'GyQjvwvkhSQgaCA5Rwo3cAxNpd5jSgdRQna8QXrtFt27'} link={'https://solscan.io/token/GyQjvwvkhSQgaCA5Rwo3cAxNpd5jSgdRQna8QXrtFt27'}/>
        <TokenAddress token={contractToken} link={'https://polygonscan.com/token/0x248f2b2ca86dc1033be2df56e5481f4f8bbe8c89'}/>
        <div className="grid place-items-center">
          <p>{text[2][language]}</p>
          <DecimalToken />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:gap-16 md:py-20">
        <div className="flex flex-col items-center truncate text-sm md:text-base">
          <p>{text[3][language]}</p>
          <Link
            className="underline underline-offset-2"
            target="_blank"
            href={
              'https://app.streamflow.finance/contract/solana/mainnet/DZvuN7RjpQTrZ4RNccQPemN5zPcSQ9NKU4eGqCbRxQZ2'
            }
          >
            Solana Blockchain
          </Link>
          <Link
            className="underline underline-offset-2"
            target="_blank"
            href={
              'https://www.dx.app/dxlock/view/token-locker?address=0x7f9c87a16ce7d357b958a69ded86bfe18a0804db&chain=137'
            }
          >
            Polygon ERC-20
          </Link>
        </div>
      </CardContent>
      <CardFooter className="text-center justify-center"></CardFooter>
    </Card>
  )
}

export default InfonToken
