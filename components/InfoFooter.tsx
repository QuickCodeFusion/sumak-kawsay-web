import Logo from '@/public/logo.png'
import Image from 'next/image'
import IconSocial from './IconSocial'
import { useLanguage } from '@/app/languageProvider'

const InfoFooter = (): JSX.Element => {
  const year = new Date().getFullYear()
  const { language } = useLanguage()
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Abya Yala DAO',
      es: 'Abya Yala DAO',
      pt: 'Abya Yala DAO'
    },
    2: {
      en: 'Abya Yala DAO | All rights reserved',
      es: 'Abya Yala DAO | Todos los derechos reservados',
      pt: 'Abya Yala DAO | Todos os direitos reservados'
    },
    3: {
      en: 'Legal Compliance',
      es: 'Cumplimiento Legal',
      pt: 'Conformidade Legal'
    },
    4: {
      en: 'Privacy policy',
      es: 'Política de Privacidad',
      pt: 'Política de Privacidade'
    },
    5: {
      en: 'Terms & Conditions',
      es: 'Términos y Condiciones',
      pt: 'Termos e Condições'
    }
  }
  return (
    <div className='container flex items-center justify-around flex-col md:grid grid-cols-3 place-items-center gap-4 p-4 text-white'>
        <span>
          <div className='flex gap-4 items-center'>
            <Image className='rounded-full drop-shadow-[0px_0px_7px_rgba(255,255,255,0.8)]' src={Logo} alt='logo' width={50} height={50}/>
            <p className='font-bold text-2xl drop-shadow-[0px_0px_7px_rgba(255,255,255,0.8)]'>{text[1][language]}</p>
          </div>
        </span>
        <IconSocial className='[&_svg]:fill-white drop-shadow-[0px_0px_7px_rgba(255,255,255,0.8)]'/>
        <div className='flex  flex-col justify-center drop-shadow-[0px_0px_7px_rgba(255,255,255,0.8)]'>
          <p>© {year} {text[2][language]}</p>
          <div className='flex gap-2 text-sm'>
            <a
            // href="https://drive.google.com/file/d/1K8rGq0ahHfrr1SnNTm9l9FonBW3_dOqc/view?usp=sharing"
            >{text[3][language]}</a>|<a
            // href="https://drive.google.com/file/d/1SYo4OIxyJjzHigEmfR2X8KXrD-S62qgp/view?usp=sharing"
            >{text[4][language]}</a>
          </div>
          <a className='text-sm' href="#">{text[5][language]}</a>
        </div>
    </div>
  )
}

export default InfoFooter
