import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'

const text: Record<string, Record<string, string>> = {
  1: {
    en: 'STELLAR MARKETPLACE',
    es: 'MERCADO ESTELAR',
    pt: 'MERCADO ESTELAR'
  },
  2: {
    en: 'An innovative platform where community engagement meets economic revolution. Here, participants can interact using Ayni Coin to buy, sell services, and products, creating a vibrant marketplace. Our approach centers on:',
    es: 'Una plataforma innovadora donde el compromiso comunitario se encuentra con la revolución económica. Aquí, los participantes pueden interactuar usando Ayni Coin para comprar, vender servicios y productos, creando un mercado vibrante. Nuestro enfoque se centra en:',
    pt: 'Uma plataforma inovadora onde o engajamento da comunidade encontra a revolução econômica. Aqui, os participantes podem interagir usando Ayni Coin para comprar, vender serviços e produtos, criando um mercado vibrante. Nosso enfoque se concentra em:'
  },
  3: {
    en: 'Asset Tokenization:',
    es: 'Tokenización de Activos:',
    pt: 'Tokenização de Ativos:'
  },
  4: {
    en: 'Pioneering digital asset management, we transform real estate, natural resources, cultural artifacts, and intellectual properties into digital tokens. This strategy, integrated with AI and XR technology, fosters a transparent, efficient market, simplifying investments while promoting sustainability and prosperity.',
    es: 'Pioneros en la gestión de activos digitales, transformamos bienes inmuebles, recursos naturales, artefactos culturales y propiedades intelectuales en tokens digitales. Esta estrategia, integrada con tecnología de IA y XR, fomenta un mercado transparente y eficiente, simplificando las inversiones al tiempo que promueve la sostenibilidad y la prosperidad.',
    pt: 'Pioneiros na gestão de ativos digitais, transformamos imóveis, recursos naturais, artefatos culturais e propriedades intelectuais em tokens digitais. Esta estratégia, integrada com tecnologia de IA e XR, promove um mercado transparente e eficiente, simplificando investimentos enquanto promove sustentabilidade e prosperidade.'
  },
  5: {
    en: 'Community Empowerment:',
    es: 'Empoderamiento de la Comunidad:',
    pt: 'Empoderamento da Comunidade:'
  },
  6: {
    en: 'As we centralize resources and skills, our community gains independence, moving beyond traditional systems towards self-sufficiency and collective strength.',
    es: 'A medida que centralizamos recursos y habilidades, nuestra comunidad gana independencia, moviéndose más allá de los sistemas tradicionales hacia la autosuficiencia y la fuerza colectiva.',
    pt: 'À medida que centralizamos recursos e habilidades, nossa comunidade ganha independência, movendo-se além dos sistemas tradicionais para a auto-suficiência e força coletiva.'
  },
  7: {
    en: 'Dynamic Interaction::',
    es: 'Interacción Dinámica:',
    pt: 'Interação Dinâmica:'
  },
  8: {
    en: 'Ayni Coin serves as the catalyst for exchanges within our ecosystem, enhancing liquidity and broadening investment access.',
    es: 'Ayni Coin sirve como catalizador para los intercambios dentro de nuestro ecosistema, mejorando la liquidez y ampliando el acceso a las inversiones.',
    pt: 'Ayni Coin serve como catalisador para trocas dentro do nosso ecossistema, melhorando a liquidez e ampliando o acesso ao investimento.'
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
            <div className='flex xl:flex-row items-center justify-center lg:w-3/4 m-auto flex-col-reverse'>
                <Image className='mx-auto' src='/Ecosystem-BLANK.png' alt='Ecosystem-BLANK' width={500} height={500}/>
                <div className='w-full p-5 lg:w-3/4'>
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
                </div>
            </div>
        </div>
  )
}
