import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'

const text: Record<number, Record<string, string>> = {
  1: {
    en: 'Explore Shambhala Bio-habitats: A New Dimension of Living',
    es: 'Explora los Bio-hábitats de Shambhala: Una Nueva Dimensión de Vida',
    pt: 'Explore os Bio-habitats de Shambhala: Uma Nova Dimensão de Viver'
  },
  2: {
    en: 'Pioneering sustainable living solutions, Sumak Kawsay introduces Shambhala Smart Habitats and Fractional Real Estate to foster fractional ownership opportunities in dynamic, adaptable living environments. These spaces are designed to meet the evolving interests and needs of the community, supporting diverse lifestyles and sustainable productive systems.',
    es: 'Introduciendo soluciones pioneras para una vida sostenible, El Sumak Kawsay presenta los Hábitats Inteligentes Shambhala y la Propiedad Inmobiliaria Fraccional para fomentar oportunidades de copropiedad en ambientes de vida dinámicos y adaptables. Estos espacios están diseñados para satisfacer los intereses y necesidades en evolución de la comunidad, apoyando estilos de vida diversos y sistemas productivos sostenibles.',
    pt: 'Apresentando soluções pioneiras para uma vida sustentável, Sumak Kawsay introduz os Habitats Inteligentes Shambhala e o Imobiliário Fracionado para fomentar oportunidades de propriedade fracionada em ambientes de vida dinâmicos e adaptáveis. Estes espaços são projetados para atender aos interesses e necessidades evolutivas da comunidade, apoiando estilos de vida diversos e sistemas produtivos sustentáveis.'
  },
  3: {
    en: 'Virtual Reality Tours:',
    es: 'Tours en Realidad Virtual:',
    pt: 'Tours em Realidade Virtual:'
  },
  4: {
    en: 'Step into the future with VR tours of our Bio-Habitats. Experience the serene landscapes, innovative living spaces, and vibrant community life from anywhere in the world.',
    es: 'Da un paso hacia el futuro con los tours en realidad virtual de nuestros Bio-Hábitats. Experimenta los paisajes serenos, los espacios de vida innovadores y la vibrante vida comunitaria desde cualquier parte del mundo.',
    pt: 'Entre no futuro com os tours em realidade virtual dos nossos Bio-Habitats. Experimente as paisagens serenas, os espaços de vida inovadores e a vibrante vida comunitária de qualquer lugar do mundo.'
  },
  5: {
    en: 'Fractional Ownership Opportunities:',
    es: 'Oportunidades de Propiedad Fraccional:',
    pt: 'Oportunidades de Propriedade Fracionada:'
  },
  6: {
    en: 'Learn how you can become a part of this revolutionary concept through fractional real estate, making sustainable living accessible and affordable.',
    es: 'Aprende cómo puedes formar parte de este concepto revolucionario a través de la propiedad inmobiliaria fraccional, haciendo que la vida sostenible sea accesible y asequible.',
    pt: 'Aprenda como você pode fazer parte deste conceito revolucionário através do imobiliário fracionado, tornando a vida sustentável acessível e econômica.'
  },
  7: {
    en: 'Community Shaping:',
    es: 'Formación de la Comunidad:',
    pt: 'Modelagem da Comunidade:'
  },
  8: {
    en: 'Your voice matters. With every investment, gain the power to shape the future of your habitats through direct voting and proposals.',
    es: 'Tu voz importa. Con cada inversión, obtén el poder de moldear el futuro de tus hábitats a través de votaciones directas y propuestas.',
    pt: 'Sua voz importa. Com cada investimento, ganhe o poder de moldar o futuro de seus habitats através de votação direta e propostas.'
  }
}

export const Fractional = (): JSX.Element => {
  const { language } = useLanguage()
  return (
        <div className='my-12'>
            <h3 className="text-3xl mb-4 text-center font-semibold">
                {text[1][language]}
            </h3>
            <p className="w-10/12 mx-auto text-center text-lg">
                {text[2][language]}
            </p>
            <div className='md:flex place-items-center lg:w-3/4 m-auto'>
                <div className='p-5'>
                    <ul className='flex flex-col w-full p-5 gap-5'>
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
                <Image className='mx-auto' src="/blueSky.png" alt="blueSky" width={500} height={500}/>
            </div>
        </div>
  )
}
