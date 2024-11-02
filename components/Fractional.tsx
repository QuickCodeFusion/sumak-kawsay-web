import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'

const text: Record<number, Record<string, string>> = {
  1: {
    en: 'Real Estate investing accessible to everyone',
    es: 'Inversión inmobiliaria al alcance de todos',
    pt: 'Inversão imobiliária acessível a todos'
  },
  2: {
    en: 'Anyone access to quality real estate investments starting from $50 USD. We make it possible with our smart contract which represents the rights to the financial and ecological benefits of the real world asset.',
    es: 'Cualquier persona tiene acceso a inversiones inmobiliarias de calidad a partir de 50 USD. Lo hacemos posible, mediante contratos inteligentes que representan los derechos a los beneficios financieros y ecológicos del activo del mundo real.',
    pt: 'Qualquer pessoa tem acesso ao investimento inmobiliaria de qualidade a partir de 50 USD. Nossa contratação inteligente representa os direitos aos beneficios financieros e ecoloógicos do activo do mundo real'
  },
  3: {
    en: 'Ecological Housing and Resilient Community Live:',
    es: 'Vivienda Ecológica y Comunidad Resiliente:',
    pt: 'Vivienda Ecológica e Comunidade Resiliente:'
  },
  4: {
    en: 'Live in strategic bioregions, in harmony with nature, with access to ecological housing and collaborative communities that promote sovereignty and collective well-being.',
    es: 'Vive en bioregiones estratégicas, en armonía con la naturaleza, con acceso a viviendas ecológicas y comunidades colaborativas que promueven la soberanía y el bienestar colectivo.',
    pt: 'Viva em bioregões estratégicos, em harmonia com a natureza, com acesso a viviendas ecoloógicas e comunidades colaborativas que promovam a soberania e o bem-estar coletivo.'
  },
  5: {
    en: 'Comprehensive Experiences and Conscious Eco-Tourism:',
    es: 'Experiencias Integrales y Eco-Turismo Consciente:',
    pt: 'Experiências Completas e Eco-Turismo Consciente:'
  },
  6: {
    en: 'Access personal growth programs, retreats and biocultural ecotourism. Enjoy unique stays and participate in holistic activities that promote human development and community learning.',
    es: 'Accede a programas de crecimiento personal, retiros y ecoturismo biocultural. Disfruta de estancias únicas y participa en actividades holísticas que fomentan el desarrollo humano y el aprendizaje comunitario.',
    pt: 'Aceda aos programas de crescimento pessoal, retiradas e ecoturismo biocultural. Divirta-se de estabelecimentos unicos e participe em atividades holisticas que promovam o desenvolvimento humano e o aprendizagem comunitária.'
  },
  7: {
    en: 'Tokenization and Regenerative Investment Models:',
    es: 'Tokenización y Modelos de Inversión Regenerativa:',
    pt: 'Tokenização e Modelos de Inversão Regenerativa:'
  },
  8: {
    en: 'Invest in fractional projects and properties through tokens backed by real assets. Generate constant returns while contributing to the conservation and regeneration of the environment.',
    es: 'Invierte en proyectos y propiedades fraccionadas a través de tokens respaldados por activos reales. Genera rendimientos constantes mientras contribuyes a la conservación y regeneración del medio ambiente.',
    pt: 'Inveja em projetos e propriedades fracionais a partir de tokens apoiados por ativos reais. Gere retornos constantes enquanto contribuindo para a conservação e regeneração do ambiente.'
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
            <div className='flex place-items-center lg:w-3/4 m-auto my-2 flex-col-reverse md:flex-row'>
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
                <Image src="/REALSTATE.gif" alt="blueSky" width={300} height={300}/>
            </div>
        </div>
  )
}
