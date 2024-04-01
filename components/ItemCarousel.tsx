import { useLanguage } from '@/app/languageProvider'
import CarouselInfo from './CarouselInfo'

const info: Array<{ title: Record<string, string>, description: Record<string, string>, icon: string, id: number }> = [
  {
    title: {
      en: 'Sovereignty',
      es: 'Soberanía',
      pt: 'Soberania'
    },
    description: {
      en: 'Our ecosystem embraces decentralized governance and asset tokenization to promote inclusive growth and equity. We prioritize       stewardship of natural resources and the creation of a global career gateway, leveraging our collective infrastructure. Our model includes a fractional real estate portfolio and a dedicated blockchain to ensure universal identification, enhanced privacy, and security. We are committed to a global framework that leads to regenerative outcomes, high performance, and quality standards.',
      es: 'Nuestro ecosistema adopta una gobernanza descentralizada y la tokenización de activos para promover un crecimiento inclusivo y equitativo. Priorizamos la administración de recursos naturales y la creación de una puerta de acceso global a carreras, aprovechando nuestra infraestructura colectiva. Nuestro modelo incluye una cartera de bienes raíces fraccionados y una blockchain dedicada para garantizar la identificación universal, la privacidad mejorada y la seguridad. Estamos comprometidos con un marco global que conduce a resultados regenerativos, alto rendimiento y estándares de calidad.',
      pt: 'Nosso ecossistema adota uma governança descentralizada e a tokenização de ativos para promover o crescimento inclusivo e equidade. Priorizamos a administração dos recursos naturais e a criação de um portal global de carreiras, aproveitando nossa infraestrutura coletiva. Nosso modelo inclui um portfólio de imóveis fracionados e uma blockchain dedicada para garantir identificação universal, privacidade aprimorada e segurança. Estamos comprometidos com um quadro global que conduz a resultados regenerativos, alto desempenho e padrões de qualidade.'
    },
    icon: '/Ecosystem1.png',
    id: 1
  },
  {
    title: {
      en: 'Living and Virtual Platform',
      es: 'Plataforma de Vida y Virtual',
      pt: 'Plataforma de Vida e Virtual'
    },
    description: {
      en: 'We are developing a new kind of navigation in Extended Reality (XR) settings, combining Web 3.0 and decentralized finance (DeFi) to create an all-encompassing global marketplace. Our ecosystem features smart bio-habitats, customized tokens, and state-of-the-art wearable NFTs, all underpinned by blockchain and IoT technologies for superior automation. Driven by artificial intelligence, our platform sets a standard for efficiency and innovative progress.',
      es: 'Estamos desarrollando un nuevo tipo de navegación en entornos de Realidad Extendida (XR), combinando Web 3.0 y finanzas descentralizadas (DeFi) para crear un mercado global que lo abarca todo. Nuestro ecosistema cuenta con bio-hábitats inteligentes, tokens personalizados y NFTs portables de última generación, todo ello respaldado por tecnologías blockchain y IoT para una automatización superior. Impulsada por la inteligencia artificial, nuestra plataforma establece un estándar para la eficiencia y el progreso innovador.',
      pt: 'Estamos desenvolvendo um novo tipo de navegação em ambientes de Realidade Estendida (XR), combinando Web 3.0 e finanças descentralizadas (DeFi) para criar um mercado global abrangente. Nosso ecossistema apresenta bio-habitats inteligentes, tokens personalizados e NFTs vestíveis de última geração, todos apoiados por tecnologias blockchain e IoT para automação superior. Impulsionada pela inteligência artificial, nossa plataforma estabelece um padrão para eficiência e progresso inovador.'
    },
    icon: '/Ecosystem2.png',
    id: 2
  },
  {
    title: {
      en: 'Global Interdependence',
      es: 'Interdependencia Global',
      pt: 'Interdependência Global'
    },
    description: {
      en: 'We advocate for a globally interdependent framework, utilizing a collective treasure system to refine value chains and enhance productivity, thereby fostering dividends. Our model is built on strong articulation, interaction, and exchange, aimed at revolutionizing the financial landscape. Backed by a solid legal structure and supported by advanced big data analytics, our initiatives promote unified efforts towards the preservation of life and nature \'s rights, ensuring a harmonious and interconnected existence.',
      es: 'Abogamos por un marco globalmente interdependiente, utilizando un sistema de tesoro colectivo para refinar las cadenas de valor y mejorar la productividad, fomentando así los dividendos. Nuestro modelo se basa en una fuerte articulación, interacción e intercambio, con el objetivo de revolucionar el panorama financiero. Respaldado por una sólida estructura legal y apoyado por análisis avanzados de big data, nuestras iniciativas promueven esfuerzos unificados hacia la preservación de la vida y los derechos de la naturaleza, asegurando una existencia armoniosa e interconectada.',
      pt: 'Defendemos um quadro globalmente interdependente, utilizando um sistema coletivo de tesouro para refinar cadeias de valor e melhorar a produtividade, fomentando assim os dividendos. Nosso modelo é construído sobre forte articulação, interação e troca, visando revolucionar a paisagem financeira. Apoiado por uma estrutura legal sólida e suportado por análises avançadas de big data, nossas iniciativas promovem esforços unificados em direção à preservação da vida e dos direitos da natureza, garantindo uma existência harmônica e interconectada.'
    },
    icon: '/Ecosystem3.png',
    id: 3
  }
]

const text: Record<number, Record<string, string>> = {
  1: {
    en: 'The 3 pillars of our strong ecosystem',
    es: 'Los 3 pilares de nuestro fuerte ecosistema',
    pt: 'Os 3 pilares do nosso forte ecosistema'
  },
  2: {
    en: 'Ecosystem',
    es: 'Ecosistema',
    pt: 'Ecosistema'
  }
}

const ItemCarousel = (): JSX.Element => {
  const { language } = useLanguage()

  return (
        <div className='w-full my-16 flex flex-col items-center'>
          <h2 className='w-full mb-5 text-3xl text-center font-semibold z-10'>{text[1][language]}</h2>
          <p className='text-center text-xl pb-6'>{text[2][language]}</p>
          <CarouselInfo items={info.map((item) => {
            const newItem = {
              title: item.title[language],
              description: item.description[language],
              icon: item.icon,
              id: item.id
            }
            return newItem
          })}></CarouselInfo>
        </div>
  )
}

export default ItemCarousel
