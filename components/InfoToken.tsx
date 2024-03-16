import ButtonCopy from './BotonCopy'
import { CopyIcon } from '@radix-ui/react-icons'
import DecimalToken from './functionsToken/DecimalToken'
// import { useSelector } from '@/lib/redux/hooks'
import { Card } from './ui/card'

const InfonToken = (): JSX.Element => {
  // const { contract } = useSelector(state => state.contract)
  return (
          <Card className='relative bg-azure-radiance-500 border-none shadow-azure-radiance-900 shadow-lg -mt-64 md:-mt-72 mb-12 w-full rounded-3xl p-5 sm:p-10'>
            <div className='flex flex-col items-center'>
            <p>Contract Address</p>
            <div className='flex items-center pb-2'>
              <p className='font-bold truncate sm:text-xl md:w-full w-52'>{'0x248f2b2Ca86Dc1033be2Df56E5481f4f8BBE8c89'}</p>
              <ButtonCopy text={'0x248f2b2Ca86Dc1033be2Df56E5481f4f8BBE8c89'} ><CopyIcon /></ButtonCopy>
            </div>
            </div>
            <div className='grid grid-cols-2 md:gap-16'>
              <div className='grid place-items-center'><p>Decimals</p><DecimalToken/></div>
              <div className='grid place-items-center'><p>Network</p> <p>Polygon ERC-20</p></div>
            </div>
          </Card>
  )
}

export default InfonToken
