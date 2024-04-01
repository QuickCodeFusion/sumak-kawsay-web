import { CardList } from './CardList'
import { CardIconLeft } from './CardIconLeft'
import { Element } from 'react-scroll'
import { useLanguage } from '@/app/languageProvider'

export const InfoCard = (): JSX.Element => {
  const info: Array<{ title: Record<string, string>, description: Record<string, string>, icon: string }> = [
    {
      title: {
        en: 'Holistic Integration',
        es: 'Integración Holística',
        pt: 'Integração Holística'
      },
      description: {
        en: 'We merge cutting-edge blockchain and AI technologies with ancient wisdom and sustainable practices to create a self-sufficient ecosystem that nurtures the planet and its inhabitants',
        es: 'Fusionamos las tecnologías punteras de blockchain y IA con la sabiduría ecológica y prácticas sostenibles para crear un ecosistema autosuficiente que nutre al planeta y a sus habitantes.',
        pt: 'Combinamos tecnologias de blockchain e IA de ponta com sabedoria ecológica e práticas sustentáveis para criar um ecossistema autossuficiente que nutre o planeta e seus habitantes.'
      },
      icon: '/fire.png'
    },
    {
      title: {
        en: 'Community-Centric',
        es: 'Enfocado en la Comunidad',
        pt: 'Centrado na Comunidade'
      },
      description: {
        en: 'At the heart of Sumak Kawsay is our global community. Participation, governance, and shared prosperity are fundamental. Each member contributes to and benefits from the ecosystem\'s growth and sustainability.',
        es: 'En el corazón de Sumak Kawsay está nuestra comunidad global. La participación, gobernanza y prosperidad compartida son fundamentales. Cada miembro contribuye y se beneficia del crecimiento y sostenibilidad del ecosistema.',
        pt: 'No coração do Sumak Kawsay está nossa comunidade global. Participação, governança e prosperidade compartilhada são fundamentais. Cada membro contribui e beneficia do crescimento e sustentabilidade do ecossistema.'
      },
      icon: '/earth.png'
    },
    {
      title: {
        en: 'Environmental Regeneration',
        es: 'Regeneración Ambiental',
        pt: 'Regeneração Ambiental'
      },
      description: {
        en: 'Our initiatives and technologies are designed with the Earth in mind. From renewable energy projects to regenerative agriculture, we aim to reverse environmental',
        es: 'Nuestras iniciativas y tecnologías están diseñadas pensando en la Tierra. Desde proyectos de energía renovable hasta agricultura regenerativa, nuestro objetivo es revertir la degradación.',
        pt: 'Nossas iniciativas e tecnologias são desenhadas com a Terra em mente. De projetos de energia renovável a agricultura regenerativa, nosso objetivo é reverter a degradação ambiental e promover a biodiversidade.'
      },
      icon: '/water.png'
    },
    {
      title: {
        en: 'Technological Innovation',
        es: 'Innovación Tecnológica',
        pt: 'Inovação Tecnológica'
      },
      description: {
        en: 'Leveraging blockchain and AI to ensure transparency, security, and efficiency. Our ecosystem empowers individuals and communities with tools and knowledge to foster technological advancements while maintaining ecological balance.',
        es: 'Aprovechando el blockchain y la IA para asegurar la transparencia, seguridad y eficiencia. Nuestro ecosistema empodera a individuos y comunidades con herramientas y conocimiento para fomentar avances tecnológicos manteniendo el equilibrio ecológico.',
        pt: 'Aproveitando o blockchain e a IA para garantir transparência, segurança e eficiência. Nosso ecossistema capacita indivíduos e comunidades com ferramentas e conhecimento para promover avanços tecnológicos enquanto mantém o equilíbrio ecológico.'
      },
      icon: '/water.png'
    }
  ]

  const { language } = useLanguage()

  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'What Is The Sumak Kawsay Ecosystem?',
      es: '¿Qué es el Ecosistema Sumak Kawsay?',
      pt: '¿Que é o Ecossistema Sumak Kawsay?'
    },
    2: {
      en: 'The Sumak Kawsay Ecosystem is an innovative fusion of technology, ecology, and community, providing a forward-thinking solution for contemporary challenges.',
      es: 'El Ecosistema Sumak Kawsay es una fusión innovadora de tecnología, ecología y comunidad, que proporciona una solución de vanguardia para los desafíos contemporáneos.',
      pt: 'O Ecossistema Sumak Kawsay é uma fusão inovadora de tecnologia, ecologia e comunidade, fornecendo uma solução avançada para os desafios contemporâneos.'
    }
  }
  return (
    <Element name='Ecosystem' className='w-full md:mt-48 pt-12 gap-10 flex flex-col justify-center items-center'>
        <h2 className='text-3xl text-center font-semibold z-10'>{text[1][language]}</h2>
        <p className='w-10/12 text-center text-xl mx-auto pb-5'>{text[2][language]}</p>
      <CardList >
        {info.map((item, index) => (
          <CardIconLeft key={index} item={{ ...item, title: item.title[language], description: item.description[language] }}/>
        ))}
      </CardList>

    </Element>

  )
}
