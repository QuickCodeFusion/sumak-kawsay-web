import Logo from '@/public/logo.png'
import Image from 'next/image'
import IconSocial from './IconSocial'

const InfoFooter = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <div className='container flex items-center justify-around flex-col md:grid grid-cols-3 place-items-center gap-4 p-4 text-white'>
        <span>
          <div className='flex gap-4 items-center'>
            <Image className='rounded-full' src={Logo} alt='logo' width={50} height={50}/>
            <p className='font-bold text-2xl'>Sumak Kawsay</p>
          </div>
        </span>
        <IconSocial/>
        <p>© {year} Sumak Kawsay | All rights reserved</p>
    </div>
  )
}

export default InfoFooter
