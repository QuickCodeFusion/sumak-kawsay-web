import { useLanguage } from '@/app/languageProvider'
import Image from 'next/image'
export const Passport = (): JSX.Element => {
  const { language } = useLanguage()

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'Universal Passport',
      es: 'Pasaporte Universal',
      pt: 'Passaporte Universal'
    },
    2: {
      en: 'Your Key to a Global Community',
      es: 'Tu llave para una Comunidad Global',
      pt: 'Sua Chave para uma Comunidade Global'
    },
    3: {
      en: 'This pioneering initiative offers you unparalleled access to our ecosystem \'s resources, unifying community members in our shared vision for a sustainable future',
      es: 'Esta iniciativa pionera te ofrece un acceso sin precedentes a los recursos de nuestro ecosistema, unificando a los miembros de la comunidad en nuestra visión compartida para un futuro sostenible',
      pt: 'Esta iniciativa pioneira oferece acesso sem precedentes aos recursos do nosso ecossistema, unificando os membros da comunidade em nossa visão compartilhada para um futuro sustentável'
    },
    4: {
      en: 'Benefits and Security',
      es: 'Beneficios y seguridad',
      pt: 'Benefícios e Segurança'
    },
    5: {
      en: 'Global Mobility and Unity: The Universal Passport acts as a symbol of unity, offering token holders the freedom to move and access experiences and resources across the ecosystem, fostering a strong sense of belonging and global citizenship.',
      es: 'Movilidad Global y Unidad: El Pasaporte Universal actúa como un símbolo de unidad, ofreciendo a los tenedores de tokens la libertad de moverse y acceder a experiencias y recursos en todo el ecosistema, fomentando un fuerte sentido de pertenencia y ciudadanía global.',
      pt: 'Mobilidade Global e Unidade: O Passaporte Universal atua como um símbolo de unidade, oferecendo aos detentores de tokens a liberdade de se moverem e acessarem experiências e recursos em todo o ecossistema, fomentando um forte senso de pertencimento e cidadania global.'
    },
    6: {
      en: 'Safety and Well-being: In times of geopolitical unrest, the passport prioritizes holder safety, facilitating swift rescue and relocation to safer environments within our extensive network.',
      es: 'Seguridad y Bienestar: En tiempos de inestabilidad geopolítica, el pasaporte prioriza la seguridad del titular, facilitando el rescate rápido y la reubicación a entornos más seguros dentro de nuestra extensa red.',
      pt: 'Segurança e Bem-estar: Em tempos de instabilidade geopolítica, o passaporte prioriza a segurança do titular, facilitando o resgate rápido e a realocação para ambientes mais seguros dentro de nossa extensa rede.'
    },
    7: {
      en: 'Identity and Community: Empowers holders with a unique identity that transcends national boundaries, promoting a global citizen ethos and ensuring you are never isolated or vulnerable.',
      es: 'Identidad y Comunidad: Empodera a los titulares con una identidad única que trasciende las fronteras nacionales, promoviendo un ethos de ciudadanía global y asegurando que nunca estés aislado o vulnerable.',
      pt: 'Identidade e Comunidade: Empodera os detentores com uma identidade única que transcende fronteiras nacionais, promovendo um ethos de cidadão global e garantindo que você nunca esteja isolado ou vulnerável.'
    }
  }

  return (
        <div className='w-full flex flex-col justify-center'>
            <h3 className="text-3xl text-center font-semibold pb-2">{text[1][language]}</h3>
            <p className="text-center font-semibold text-2xl pb-4">{text[2][language]}</p>
            <p className="w-10/12 mx-auto text-center text-xl">{text[3][language]}</p>
            <div className='flex flex-col lg:flex-row md:w-3/4 self-center place-items-center p-5'>
                <div className='p-5 flex flex-col items-center gap-6'>
                <p className='text-xl'>{text[4][language]}</p>
                <ul className='flex  flex-col gap-5 list-disc pl-5'>
                    <li>
                        {text[5][language]}
                    </li>
                    <li>
                        {text[6][language]}
                    </li>
                    <li>
                        {text[7][language]}
                    </li>
                </ul>
                </div>
                <Image className='drop-shadow-2xl shadow-shadow' src='/passport 2.png' alt='passport' width={300} height={300}/>
            </div>
        </div>
  )
}
