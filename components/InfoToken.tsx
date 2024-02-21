import ButtonCopy from './BotonCopy'
import { CopyIcon } from '@radix-ui/react-icons'
import DecimalToken from './functionsToken/DecimalToken'

const InfonToken = (): JSX.Element => {
  return (
        <div className='mb-12 flex justify-center items-center flex-col w-auto md:w-10/12 md:h-[150px] bg-orange-900 rounded-xl gap-2 p-2 top-8 md:top-4 absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex flex-col items-center'>
            <p>Contract Address</p>
            <div className='flex items-center'>
              <p className='font-bold truncate sm:text-xl md:w-full w-52'>0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54</p>
              <ButtonCopy text='0xA58501cC8bc605B498Cb6AD15DcB835902e0CA54' ><CopyIcon /></ButtonCopy>
            </div>
            <p className='text-gray-500 text-center'>Do not send any funds to this address! They will be lost forever!</p>
          </div>
          <div className='grid grid-cols-2 md:gap-16'>
            <div className='grid place-items-center'><p>Decimals</p><DecimalToken/></div>
            <div className='grid place-items-center'><p>Network</p> <p>Polygon ERC-20</p></div>
          </div>
        </div>
  )
}

export default InfonToken
