'use client'
import { ButtonUI } from './ui/button'
import PresaleCountdown from './PresaleCountdown'
import InfoPhase from './functionsContract/InfoPhase'
import BuyInfo from './BuyInfo'
import Modal from './Modal'
import WhitePaper from './WhitePaper'
import { useState } from 'react'
import BinanceWidget from './BinanceWidget'

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
        <main className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 pt-8 px-4 justify-center w-screen'>
        <section>
          <div className='flex flex-col text-center rounded-3xl md:mx-10 text-white justify-center p-6 lg:gap-10 md:gap-16 items-center my-12 bg-slate-500/50'>
          <h1 className='text-xl md:text-3xl font-bold'>
          Embracing the Renaissance of Prosperity in the Sumak Kawsay.
          Co-creating a World of Harmony and Abundance
          </h1>
          <div className='mt-5'>
          <p className='text-md md:text-xl font-semibold'>A transformation that begins with you and resonates across the globe</p>
          <p className='text-justify p-4'>The Sumak Kawsay Ecosystem blends asset tokenization, artificial intelligence, decentralized governance, and privacy, fostering a legal and political framework for global articulation, collective prosperity, and sovereignty. This approach ensures ethical financial systems and unified actions for the well-being of Earth.</p>
          </div>
            <ButtonUI onClick={handleButtonClick} className='rounded-full'>
              Read the whitepaper
            </ButtonUI>
            <Modal open={open} setOpen={setOpen} className='w-screen p-2 md:p-0'>
              <WhitePaper/>
            </Modal>
          </div>
        </section>
          <section className='backdrop-blur bg-black/50 border rounded-3xl p-4 flex flex-col w-full lg:w-10/12 mx-0 md:mx-12'>
            <PresaleCountdown/>
            <InfoPhase/>
            <BuyInfo/>
          </section>
          <section className='w-screen lg:absolute  bottom-0'>
            <BinanceWidget/>
          </section>
      </main>
  )
}

export default PreView
