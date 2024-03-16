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
        <div className=' h-44'>
        <p className='font-bold uppercase text-xl mb-4'>What is the amount of USDT you wish to authorize?</p>
                        <Input className='mb-4' value={value} onChange={handlevalue}/>
                        <div className='grid md:grid-cols-2 gap-4 mt'>
                            <ButtonUI className='w-full uppercase rounded-full bg-red-700 border-none hover:bg-red-400' onClick={() => { setIsOpen(false) }}>Cancel</ButtonUI>
                            <EnableToken value={value}/>
                        </div>
        </div>
  )
}

export default ValidateUsdt
