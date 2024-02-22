'use client'
import { ButtonUI } from './ui/button'
import PresaleCountdown from './PresaleCountdown'
import InfoPhase from '@/utils/functionsContract/InfoPhase'
import BuyInfo from './BuyInfo'
import Modal from './Modal'
import WhitePaper from './WhitePaper'
import { useState } from 'react'

const PreView = (): React.JSX.Element => {
  const [open, setOpen] = useState(false)

  const handleButtonClick = (): void => {
    if (window.screen.width < 768) {
      window.open('/whitepaper.pdf', '_blank')
    } else {
      setOpen(true)
    }
  }

  return (
        <main className='flex flex-col md:flex-row gap-4 pt-8 justify-center w-screen'>
        <section>
          <div className='flex flex-col text-center text-white justify-center gap-10 md:gap-16 items-center my-12'>
            <h1 className='text-4xl md:text-6xl font-bold'>
              Unified Decentralized Platform
            </h1>
            <p className='text-md md:text-lg font-semibold'>Buy tokens now and reap the benefits of the blockchain revolution!</p>
            <ButtonUI onClick={handleButtonClick} className='rounded-full'>
              Read the whitepaper
            </ButtonUI>
            <Modal open={open} setOpen={setOpen} className='w-screen p-2 md:p-0'>
              <WhitePaper/>
            </Modal>
          </div>
        </section>
          <section className='backdrop-blur bg-black/50 border rounded-3xl p-4 flex flex-col w-full md:w-1/2 mx-0 md:mx-12'>
            <PresaleCountdown/>
            <InfoPhase/>
            <BuyInfo/>
          </section>
      </main>
  )
}

export default PreView
