import ButtonCopy from './BotonCopy'
import { CopyIcon } from '@radix-ui/react-icons'
import DecimalToken from './functionsToken/DecimalToken'
import { useSelector } from '@/lib/redux/hooks'
import { Card } from './ui/card'

const InfonToken = (): JSX.Element => {
  const { contract } = useSelector(state => state.contract)
  return (
          <Card className='relative bg-azure-radiance-500 border-none shadow-azure-radiance-900 shadow-lg -mt-64 md:-mt-72 mb-12 w-full rounded-3xl p-5 sm:p-10'>
            <div className='flex flex-col items-center'>
            <p>Contract Address</p>
            <div className='flex items-center'>
              <p className='font-bold truncate sm:text-xl md:w-full w-52'>{contract}</p>
              <ButtonCopy text={contract} ><CopyIcon /></ButtonCopy>
            </div>
            <p className='text-gray-700 text-center'>Do not send any funds to this address! They will be lost forever!</p>
            </div>
            <div className='grid grid-cols-2 md:gap-16'>
              <div className='grid place-items-center'><p>Decimals</p><DecimalToken/></div>
              <div className='grid place-items-center'><p>Network</p> <p>Polygon ERC-20</p></div>
            </div>
          </Card>
  )
}

export default InfonToken
