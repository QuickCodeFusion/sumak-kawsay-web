import ButtonCopy from './BotonCopy'
import { CopyIcon } from '@radix-ui/react-icons'
import DecimalToken from './functionsToken/DecimalToken'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { contractToken } from '@/utils/AbyContrat'
import { useLanguage } from '@/app/languageProvider'
import Link from 'next/link'

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
    <Card className="relative bg-azure-radiance-500 border-none shadow-azure-radiance-900 shadow-lg -mt-64 md:-mt-72 mb-12 w-full rounded-3xl">
      <CardHeader className="flex flex-col items-center">
        <p>{text[1][language]}</p>
        <div className="flex items-center pb-2">
          <p className="font-bold truncate sm:text-xl md:w-full w-52">
            {contractToken}
          </p>
          <ButtonCopy text={contractToken}>
            <CopyIcon />
          </ButtonCopy>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:gap-16">
        <div className="grid place-items-center">
          <p>{text[2][language]}</p>
          <DecimalToken />
        </div>
        <div className="grid place-items-center">
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
    </Card>
  )
}

export default InfonToken
