'use client'
import { useState } from 'react'
import Modal from './Modal'
import WhitePaper from './WhitePaper'
import { ButtonUI } from './ui/button'

const ButtonWhitePaper = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  const handleButtonClick = (): void => {
    if (window.screen.width < 768) {
      window.open('/whitepaper.pdf', '_blank')
    } else {
      setOpen(true)
    }
  }
  return (
    <>
        <ButtonUI onClick={handleButtonClick} className='w-full rounded-full border-2'>
          Whitepaper
        </ButtonUI>
        <Modal open={open} setOpen={setOpen} className='w-screen p-2 md:p-0'>
              <WhitePaper/>
        </Modal>
    </>
  )
}

export default ButtonWhitePaper
