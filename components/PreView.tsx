import { Link } from 'lucide-react'
import { ButtonUI } from './ui/button'
import PresaleCountdown from './PresaleCountdown'
import InfoPhase from './functionsContract/InfoPhase'
import BuyInfo from './BuyInfo'

const PreView = (): React.JSX.Element => {
  return (
        <main className='flex flex-col md:flex-row gap-4 pt-8 justify-center w-screen'>
        <section className='md:w-1/2 flex justify-center p-10'>
        <div className='flex flex-col text-center text-white justify-center gap-5 md:gap-1 items-center'>
          <h1 className='text-xl md:text-3xl font-bold text-justify'>
          Embracing the Renaissance of Prosperity in the Sumak Kawsay.
          Co-creating a World of Harmony and Abundance
          </h1>
          <div className='mt-5'>
          <p className='text-md md:text-xl font-semibold'>A transformation that begins with you and resonates across the globe</p>
          <p className='text-justify p-4'>The Sumak Kawsay Ecosystem blends asset tokenization, artificial intelligence, decentralized governance, and privacy, fostering a legal and political framework for global articulation, collective prosperity, and sovereignty. This approach ensures ethical financial systems and unified actions for the well-being of Earth.</p>
          </div>
          <ButtonUI asChild className='rounded-full capitalize'>
            <Link href='/whitepaper.pdf' target='_blank'>
              Read the whitepaper
            </Link>
          </ButtonUI>
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
