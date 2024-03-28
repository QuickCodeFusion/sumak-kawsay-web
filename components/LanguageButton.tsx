import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ButtonUI } from './ui/button'
import Image from 'next/image'
import { useLanguage } from '@/app/languageProvider'
import { useEffect } from 'react'

const LanguageButton = (): React.JSX.Element => {
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    console.log(language)
  }, [language])

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <ButtonUI variant="outline" size="icon" className='min-w-[2.5rem] bg-background/65 border-none'>
            {language === 'es' && <Image src='/argentina.png' alt='argentina' width={24} height={24}></Image>}
            {language === 'en' && <Image src='/bandera.png' alt='argentina' width={24} height={24}></Image>}
            {language === 'pt' && <Image src='/brasil.png' alt='brasil' width={24} height={24}></Image>}
        </ButtonUI>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => { setLanguage('es') }} className='flex gap-2 p-2'>
                <Image src='/argentina.png' alt='argentina' width={24} height={24}></Image>
                    Español
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setLanguage('en') }} className='flex gap-2 p-2'>
                <Image src='/bandera.png' alt='argentina' width={24} height={24}></Image>
                    English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setLanguage('pt')
            }} className='flex gap-2 p-2'>
                <Image src='/brasil.png' alt='brasil' width={24} height={24}></Image>
                    Portugues
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageButton
