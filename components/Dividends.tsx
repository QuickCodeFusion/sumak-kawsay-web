import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'

const text: Record<number, Record<string, string>> = {
  1: {
    en: 'Dividends and Staking: A Path to Universal Income',
    es: 'Dividendos y Staking: Un Camino hacia el Ingreso Universal',
    pt: 'Dividendos e Staking: Um Caminho para a Renda Universal'
  },
  2: {
    en: 'Experience the joy of giving and receiving. Engage with our ecosystem, stake your tokens, and earn dividends.',
    es: 'Experimenta la alegría de dar y recibir. Participa en nuestro ecosistema, apuesta tus tokens y gana dividendos.',
    pt: 'Experimente a alegria de dar e receber. Engaje-se com nosso ecossistema, aplique seus tokens e ganhe dividendos.'
  },
  3: {
    en: 'Empowerment Tiers of Engagement',
    es: 'Niveles de Empoderamiento de Participación',
    pt: 'Níveis de Empoderamento de Engajamento'
  },
  4: {
    en: 'Unity Tier:',
    es: 'Nivel de Unidad:',
    pt: 'Nível de Unidade:'
  },
  5: {
    en: 'This is your starting point within the Sumak Kawsay collective, offering an introduction to our values and initial dividends. It represents the foundational step towards inclusivity and shared purpose, aligning with our ethos and community spirit.',
    es: 'Este es tu punto de partida dentro del colectivo Sumak Kawsay, ofreciendo una introducción a nuestros valores y dividendos iniciales. Representa el paso fundamental hacia la inclusividad y el propósito compartido, alineándose con nuestro ethos y espíritu comunitario.',
    pt: 'Este é o seu ponto de partida dentro do coletivo Sumak Kawsay, oferecendo uma introdução aos nossos valores e dividendos iniciais. Representa o passo fundamental em direção à inclusividade e ao propósito compartilhado, alinhando-se com nosso ethos e espírito comunitário.'
  },
  6: {
    en: 'Growth Tier:',
    es: 'Nivel de Crecimiento:',
    pt: 'Nível de Crescimento:'
  },
  7: {
    en: 'For members increasing their involvement, this tier provides greater dividends and signifies a deeper commitment to our collective future. It represents a middle ground for those actively contributing to and engaging with our ecosystem\'s expansion.',
    es: 'Para los miembros que aumentan su participación, este nivel proporciona mayores dividendos y significa un compromiso más profundo con nuestro futuro colectivo. Representa un terreno intermedio para aquellos que contribuyen activamente y se involucran con la expansión de nuestro ecosistema.',
    pt: 'Para membros que aumentam seu envolvimento, este nível fornece maiores dividendos e significa um compromisso mais profundo com o nosso futuro coletivo. Representa um meio termo para aqueles que contribuem ativamente e se envolvem com a expansão do nosso ecossistema.'
  },
  8: {
    en: 'Inclusion Tier:',
    es: 'Nivel Herencia:',
    pt: 'Nível Herança:'
  },
  9: {
    en: 'The highest level, rewarding our most committed members, symbolizing a significant contribution to our vision and goals. This tier is for those aiming to create a meaningful, lasting impact, ensuring a legacy of prosperity, sustainability, and community well-being.',
    es: 'El nivel más alto, recompensando a nuestros miembros más comprometidos, simbolizando una contribución significativa a nuestra visión y objetivos. Este nivel es para aquellos que buscan crear un impacto significativo y duradero, asegurando un legado de prosperidad, sostenibilidad y bienestar comunitario.',
    pt: 'O nível mais alto, recompensando nossos membros mais comprometidos, simbolizando uma contribuição significativa para a nossa visão e objetivos. Este nível é para aqueles que visam criar um impacto significativo e duradouro, garantindo um legado de prosperidade, sustentabilidade e bem-estar comunitário.'
  }
}
export const Dividends = (): JSX.Element => {
  const { language } = useLanguage()

  return (
        <div className='my-20'>
            <h3 className="text-3xl text-center mb-4 font-semibold">{text[1][language]}</h3>
            <p className="w-10/12 mx-auto text-center mb-4 text-xl">
                {text[2][language]}
            </p>
            <p className="text-center font-semibold text-2xl mb-5 pt-3">{text[3][language]}</p>
            <div className='md:flex items-center justify-center flex-col md:w-3/4 m-auto gap-10'>
                <div className="flex items-center justify-center gap-5 flex-wrap flex-col lg:flex-row">
                    <Image src="/level1.png" alt="unity" width={250} height={250}/>
                    <div className="lg:w-1/2 ">
                        <p className='text-xl font-medium'>{text[4][language]}</p>
                        {text[5][language]}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 flex-wrap flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/2">
                    <p className='text-xl font-medium'>{text[6][language]}</p>
                    {text[7][language]}
                    </div>
                    <Image src="/level2.png" alt="unity" width={250} height={250}/>
                </div>
                <div className="flex items-center justify-center gap-5 flex-wrap flex-col lg:flex-row">
                    <Image src="/level3.png" alt="unity" width={150} height={150}/>
                    <div className="lg:w-1/2">
                    <div>
                    <p className='text-xl font-medium'>{text[8][language]}</p>
                    {text[9][language]}
                </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
