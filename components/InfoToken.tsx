import ButtonCopy from './BotonCopy'
import { CopyIcon } from '@radix-ui/react-icons'
import DecimalToken from './functionsToken/DecimalToken'
import { Card } from './ui/card'
import { contractToken } from '@/utils/AbyContrat'
import { useLanguage } from '@/app/languageProvider'

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
          <Card className='relative bg-azure-radiance-500 border-none shadow-azure-radiance-900 shadow-lg -mt-64 md:-mt-72 mb-12 w-full rounded-3xl p-5 sm:p-10'>
            <div className='flex flex-col items-center'>
            <p>{text[1][language]}</p>
            <div className='flex items-center pb-2'>
              <p className='font-bold truncate sm:text-xl md:w-full w-52'>{contractToken}</p>
              <ButtonCopy text={contractToken} ><CopyIcon /></ButtonCopy>
            </div>
            </div>
            <div className='grid grid-cols-2 md:gap-16'>
              <div className='grid place-items-center'><p>{text[2][language]}</p><DecimalToken/></div>
              <div className='grid place-items-center'><p>{text[3][language]}</p> <p>Polygon ERC-20</p></div>
            </div>
          </Card>
  )
}

export default InfonToken
