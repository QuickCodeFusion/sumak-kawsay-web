import Logo from '@/public/logo.png'
import Image from 'next/image'
import IconSocial from './IconSocial'

const InfoFooter = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <div className='container flex items-center justify-around flex-col lg:grid grid-cols-3 gap-4 p-4 text-white'>
        <span>
          <div className='flex gap-4 items-center ring-offset-2'>
            <Image className='rounded-full' src={Logo} alt='logo' width={50} height={50}/>
            <p className='font-bold text-2xl'>Sumak Kawsay</p>
          </div>
          <p className='mt-4 self-end'>The Sumak Kawsay Ecosystem blends asset tokenization, artificial intelligence, decentralized governance, and privacy, fostering a legal and political framework for global articulation, collective prosperity, and sovereignty. This approach ensures ethical financial systems and unified actions for the well-being of Earth.</p>
        </span>
        <IconSocial/>
        <p>© {year} Sumak Kawsay | All rights reserved</p>
    </div>
  )
}

export default InfoFooter
