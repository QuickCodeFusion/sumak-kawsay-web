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
        <div className='flex  flex-col justify-center'>
          <p>© {year} Sumak Kawsay | All rights reserved</p>
          <div className='flex gap-2 text-sm'>
            <a href="https://drive.google.com/file/d/1K8rGq0ahHfrr1SnNTm9l9FonBW3_dOqc/view?usp=sharing">Legal Compliance</a>|<a href="https://drive.google.com/file/d/1SYo4OIxyJjzHigEmfR2X8KXrD-S62qgp/view?usp=sharing">Privacy policy</a>
          </div>
          <a className='text-sm' href="https://sumakkawsay.com">Terms and Conditions</a>
        </div>
    </div>
  )
}

export default InfoFooter
