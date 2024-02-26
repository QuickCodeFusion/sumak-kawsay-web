import ButtonWhitePaper from './ButtonWhiterPaper'
import { Card } from './ui/card'
const InfoPresale = (): JSX.Element => {
  return (
        <div className='flex flex-col lg:w-1/2 text-center text-white justify-center gap-5 md:gap-1 items-center'>
          <Card className=' p-6 bg-amber-700/50  backdrop-filter backdrop-blur-lg border-none '>
              <h1 className='text-xl md:text-3xl font-bold text-justify'>
                Embracing the Renaissance of Prosperity in the Sumak Kawsay.
                Co-creating a World of Harmony and Abundance
              </h1>
              <div className='mt-5'>
              <p className='text-md md:text-xl font-semibold'>A transformation that begins with you and resonates across the globe</p>
              <p className='text-justify p-4'>The Sumak Kawsay Ecosystem blends asset tokenization, artificial intelligence, decentralized governance, and privacy, fostering a legal and political framework for global articulation, collective prosperity, and sovereignty. This approach ensures ethical financial systems and unified actions for the well-being of Earth.</p>
              </div>
              <ButtonWhitePaper/>
          </Card>
        </div>
  )
}

export default InfoPresale
