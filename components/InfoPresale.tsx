import ButtonWhitePaper from './ButtonWhiterPaper'
import IconSocial from './IconSocial'
import { Card } from './ui/card'
const InfoPresale = (): JSX.Element => {
  return (
          <div className='flex justify-center items-center flex-col md:gap-4'>
              <h1 className='text-xl md:text-3xl font-bold text-center'>
                Embracing the Renaissance of Prosperity in the Sumak Kawsay.
                Co-creating a World of Harmony and Abundance
              </h1>
              <div className='my-9'>
              <p className='text-md md:text-xl text-center font-semibold'>A transformation that begins with you and resonates across the globe</p>
              <p className='text-center md:p-4'>The Sumak Kawsay Ecosystem blends asset tokenization, artificial intelligence, decentralized governance, and privacy, fostering a legal and political framework for global articulation, collective prosperity, and sovereignty. This approach ensures ethical financial systems and unified actions for the well-being of Earth.</p>
              </div>
              <span className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
                <IconSocial/>
                <ButtonWhitePaper/>
              </span>
          </div>
  )
}

export default InfoPresale
