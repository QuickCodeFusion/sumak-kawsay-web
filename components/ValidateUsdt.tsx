import { Input } from './ui/input'
import EnableToken from './functionsToken/EnableToken'
import { ButtonUI } from './ui/button'
import { useState } from 'react'
const ValidateUsdt = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }): JSX.Element => {
  const [value, setValue] = useState('0')
  const handlevalue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value
    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '')
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setValue(sanitizedValue)
    }
  }
  console.log(value)
  return (
        <div className=' '>

        <p className='font-bold text-sm md:text-xl mb-1 md:mb-4'>What is the amount of USDT you wish to authorize?</p>
                        <div className='text-sm md:text-base text-center mb-3 border w-48 rounded-full mx-auto'>1 UNITY = 10.2 USDT</div>
                        <Input className='mb-2 md:mb-4' value={value} onChange={handlevalue}/>
                        <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4 '>
                            <ButtonUI className='w-full uppercase rounded-full bg-red-700 border-none hover:bg-red-400' onClick={() => { setIsOpen(false) }}>Cancel</ButtonUI>
                            <EnableToken value={value}/>
                        </div>
        </div>
  )
}

export default ValidateUsdt
