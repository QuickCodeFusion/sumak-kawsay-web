import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'
import HexDiagram from './HexDiagram'

const text: Record<string, Record<string, string>> = {
  1: {
    en: 'Global Market',
    es: 'Mercado Global',
    pt: 'Mercado Global'
  },
  2: {
    en: 'Access an exclusive catalogue of sustainable products and services aligned with the principles of regeneration and circular economy.',
    es: 'Accede a un catálogo exclusivo de productos y servicios sostenibles alineados con los principios de regeneración y economía circular.',
    pt: 'Aceda a um catálogo exclusivo de produtos e serviços sustentáveis alinhados com os princióes de regeneração e economia circular.'
  },
  3: {
    en: 'Global regenerative impact:',
    es: 'Impacto regenerativo global:',
    pt: 'Impacto regenerativo global:'
  },
  4: {
    en: 'Products and services aligned with ecosystem regeneration, sustainability and wellbeing, driving positive change in communities and the environment.',
    es: 'Productos y servicios alineados con la regeneración de ecosistemas, sostenibilidad y bienestar, impulsando un cambio positivo en comunidades y el medio ambiente.',
    pt: 'Produtos e serviços alinhados com a regeneração de ecosistemas, sustentabilidade e bem-estar, impulsionando uma mudança positiva nas comunidades e o ambiente.'
  },
  5: {
    en: 'Fair Trade and Global connection:',
    es: 'Comercio Justo y Conexión global:',
    pt: 'Comercio justo e conexão global:'
  },
  6: {
    en: 'A platform where local entrepreneurs, communities and global consumers collaborate to create circular and sustainable economies.',
    es: 'Una plataforma donde emprendedores locales, comunidades y consumidores globales colaboran para crear economías circulares y sostenibles.',
    pt: 'Uma plataforma onde empreendedores locais, comunidades e consumidores globais colaboram para criar economias circulares e sustentáveis.'
  },
  7: {
    en: 'Rewards and Exclusive access:',
    es: 'Recompensas and Acceso exclusivo:',
    pt: 'Recompensas e acesso exclusivo:'
  },
  8: {
    en: 'Participate through staking and get benefits such as discounts and unique experiences.',
    es: 'Participa mediante staking y obtén beneficios como descuentos y experiencias únicas.',
    pt: 'Participe por staking e obtenha vantagens como descontos e experiências únicas.'
  }
}
export const Marketplace = (): JSX.Element => {
  const { language } = useLanguage()

  return (
        <div className='my-12'>
            <h3 className="text-3xl mb-4 text-center font-semibold">{text[1][language]}</h3>
            <p className="w-10/12 mx-auto text-center text-xl">
                {text[2][language]}
            </p>
            <div className='w-full flex items-center justify-center  flex-col-reverse'>
                <Image className='mx-auto' src='/Ecosystem-BLANK.png' alt='Ecosystem-BLANK' width={500} height={500}/>
                <div className='w-screen p-5 lg:w-3/4 flex'>
                  <ul className='flex flex-col w-full p-5 gap-5 list-decimal'>
                      <li>
                          <p className='text-xl font-medium'>{text[3][language]}</p>
                          {text[4][language]}
                      </li>
                      <li>
                          <p className='text-xl font-medium'>{text[5][language]}</p>
                          {text[6][language]}
                      </li>
                      <li>
                          <p className='text-xl font-medium'>{text[7][language]}</p>
                          {text[8][language]}
                      </li>
                  </ul>
            <HexDiagram></HexDiagram>
                </div>
            </div>
        </div>
  )
}
