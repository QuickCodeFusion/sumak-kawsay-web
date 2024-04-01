import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Card } from './ui/card'
import { Element } from 'react-scroll'
import { useLanguage } from '@/app/languageProvider'

const Item: Array<{
  id: string
  title: Record<string, string>
  content: Record<string, string>
}> = [
  {
    title: {
      en: 'What is the Sumak Kawsay Ecosystem?',
      es: '¿Qué es el Ecosistema Sumak Kawsay?',
      pt: '¿O que é o Ecossistema Sumak Kawsay??'
    },
    content: {
      en: 'Sumak Kawsay is a holistic ecosystem that merges advanced technology with ecological wisdom and social regeneration. It aims to create sustainable, interconnected communities by leveraging blockchain and AI technologies, promoting regenerative practices, and fostering global collaboration.',
      es: 'Sumak Kawsay es un ecosistema holístico que fusiona tecnología avanzada con sabiduría ecológica y regeneración social. Su objetivo es crear comunidades sostenibles e interconectadas aprovechando las tecnologías de blockchain e IA, promoviendo prácticas regenerativas y fomentando la colaboración global.',
      pt: 'Sumak Kawsay é um ecossistema holístico que mescla tecnologia avançada com sabedoria ecológica e regeneração social. Visa criar comunidades sustentáveis e interconectadas, alavancando tecnologias blockchain e IA, promovendo práticas regenerativas e incentivando a colaboração global.'
    },
    id: '1'
  },
  {
    title: {
      en: 'How does the ICO contribute to global sustainability?',
      es: '¿Cómo contribuye el ICO a la sostenibilidad global?',
      pt: 'Como contribui o ICO a sustentabilidade global?'
    },
    content: {
      en: 'The ICO funds will drive the creation of a decentralized ecosystem focusing on regenerative practices, equitable resource management, and integrating ancestral wisdom with modern technology, fostering a sustainable global community.',
      es: 'Los fondos del ICO impulsarán la creación de un ecosistema descentralizado centrado en prácticas regenerativas, gestión equitativa de recursos e integración de la sabiduría ancestral con la tecnología moderna, fomentando una comunidad global sostenible.',
      pt: 'Os fundos do ICO impulsionarão a criação de um ecossistema descentralizado focado em práticas regenerativas, gestão equitativa de recursos e integração da sabedoria ancestral com a tecnologia moderna, promovendo uma comunidade global sustentável.'
    },
    id: '2'
  },
  {
    title: {
      en: 'What are the benefits of investing in the Sumak Kawsay ICO?',
      es: '¿Cuáles son los beneficios de invertir en el ICO de Sumak Kawsay?',
      pt: 'Quais os benefícios de investir no ICO do Sumak Kawsay?'
    },
    content: {
      en: 'Token holders enjoy financial benefits such as value appreciation and revenue sharing, community and ecosystem participation rights, and ecological and social impacts through sustainable project contributions. They also get access to exclusive platforms, events, and opportunities to contribute to community development initiatives.',
      es: 'Los tenedores de tokens disfrutan de beneficios financieros como la apreciación del valor y el reparto de ingresos, derechos de participación en la comunidad y el ecosistema, e impactos ecológicos y sociales a través de contribuciones a proyectos sostenibles. También obtienen acceso a plataformas exclusivas, eventos y oportunidades para contribuir a iniciativas de desarrollo comunitario.',
      pt: 'Os detentores de tokens desfrutam de benefícios financeiros como valorização e compartilhamento de receitas, direitos de participação na comunidade e no ecossistema, e impactos ecológicos e sociais através de contribuições para projetos sustentáveis. Eles também ganham acesso a plataformas exclusivas, eventos e oportunidades de contribuir para iniciativas de desenvolvimento comunitário.'
    },
    id: '3'
  },
  {
    title: {
      en: 'What makes Sumak Kawsay different from other ICOs?',
      es: '¿Qué hace diferente a Sumak Kawsay de otras ICOs?',
      pt: 'O que torna o Sumak Kawsay diferente de outros ICOs?'
    },
    content: {
      en: "Unlike typical ICOs, Sumak Kawsay is rooted in ecological and social regeneration, merging cutting-edge technology with ancient wisdom. It's an investment in a sustainable future, prioritizing shared prosperity and environmental stewardship.",
      es: 'A diferencia de los ICOs típicos, Sumak Kawsay se basa en la regeneración ecológica y social, fusionando tecnología de punta con sabiduría ancestral. Es una inversión en un futuro sostenible, priorizando la prosperidad compartida y la administración ambiental.',
      pt: 'Diferente dos ICOs típicos, o Sumak Kawsay é baseado em regeneração ecológica e social, mesclando tecnologia de ponta com sabedoria antiga. É um investimento em um futuro sustentável, priorizando a prosperidade compartilhada e a administração ambiental.'
    },
    id: '4'
  },
  {
    title: {
      en: 'How does the Universal Passport work?',
      es: '¿Cómo funciona el Pasaporte Universal?',
      pt: 'Como funciona o Passaporte Universal?'
    },
    content: {
      en: 'The Universal Passport provides legal recognition and status to ecosystem token holders, facilitating seamless access to shared assets and services, ensuring security in times of global crisis, and fostering a sense of global citizenship and unity.',
      es: 'El Pasaporte Universal proporciona reconocimiento legal y estatus a los poseedores de tokens del ecosistema, facilitando el acceso sin contratiempos a activos y servicios compartidos, asegurando la seguridad en tiempos de crisis global y fomentando un sentido de ciudadanía global y unidad.',
      pt: 'O Passaporte Universal fornece reconhecimento legal e status aos detentores de tokens do ecossistema, facilitando o acesso sem obstáculos a ativos e serviços compartilhados, garantindo segurança em tempos de crise global e promovendo um senso de cidadania global e unidade.'
    },
    id: '5'
  },
  {
    title: {
      en: 'Shambhala Bio-habitats, and how can I get involved?',
      es: 'Bio-hábitats de Shambhala, ¿y cómo puedo involucrarme?',
      pt: 'Bio-habitats de Shambhala, e como posso me envolver?'
    },
    content: {
      en: 'The Shambhala Bio-habitats are sustainable living models within the ecosystem, offering various lifestyle preferences and productive systems. Participants can engage through investment, residency, or contributing to the development and growth of these eco-friendly communities.',
      es: 'Los Bio-hábitats de Shambhala son modelos de vida sostenible dentro del ecosistema, ofreciendo diversas preferencias de estilo de vida y sistemas productivos. Los participantes pueden involucrarse mediante inversión, residencia o contribuyendo al desarrollo y crecimiento de estas comunidades ecológicas.',
      pt: 'Os Bio-habitats de Shambhala são modelos de vida sustentável dentro do ecossistema, oferecendo diversas preferências de estilo de vida e sistemas produtivos. Os participantes podem se engajar por meio de investimento, residência ou contribuindo para o desenvolvimento e crescimento dessas comunidades ecológicas.'
    },
    id: '6'
  },
  {
    title: {
      en: 'How does Sumak Kawsay ensure community engagement and governance?',
      es: '¿Cómo asegura Sumak Kawsay la participación comunitaria y la gobernanza?',
      pt: 'Como o Sumak Kawsay garante o engajamento da comunidade e a governança?'
    },
    content: {
      en: 'The ecosystem employs decentralized governance models, allowing token holders to vote on key decisions and participate in community programs. This ensures a transparent decision-making process and fosters a sense of ownership and involvement among community members.',
      es: 'El ecosistema emplea modelos de gobernanza descentralizados, permitiendo a los poseedores de tokens votar en decisiones clave y participar en programas comunitarios. Esto asegura un proceso de toma de decisiones transparente y fomenta un sentido de propiedad e involucramiento entre los miembros de la comunidad.',
      pt: 'O ecossistema utiliza modelos de governança descentralizados, permitindo que os detentores de tokens votem em decisões-chave e participem de programas comunitários. Isso assegura um processo de tomada de decisões transparente e promove um senso de propriedade e envolvimento entre os membros da comunidade.'
    },
    id: '7'
  },
  {
    title: {
      en: 'What is the role of technology in the ecosystem?',
      es: '¿Cuál es el papel de la tecnología en el ecosistema?',
      pt: 'Qual é o papel da tecnologia no ecossistema?'
    },
    content: {
      en: 'Technology, particularly blockchain and AI, underpins the ecosystem, ensuring transparency, security, and efficiency. It supports sustainable resource management, ecological balance, and facilitates community engagement and education.',
      es: 'La tecnología, especialmente la blockchain y la IA, sustenta el ecosistema, asegurando transparencia, seguridad y eficiencia. Apoya la gestión sostenible de recursos, el equilibrio ecológico y facilita la participación comunitaria y la educación.',
      pt: 'A tecnologia, particularmente blockchain e IA, sustenta o ecossistema, garantindo transparência, segurança e eficiência. Apoia a gestão sustentável de recursos, o equilíbrio ecológico e facilita o envolvimento da comunidade e a educação.'
    },
    id: '8'
  },
  {
    title: {
      en: 'How will the funds from the ICO be used?',
      es: '¿Cómo se utilizarán los fondos del ICO?',
      pt: 'Como os fundos do ICO serão utilizados?'
    },
    content: {
      en: "Funds will be allocated towards technological development, community engagement, operational costs, legal compliance, and sustainable initiatives, ensuring the ecosystem's growth and impact.",
      es: 'Los fondos se asignarán al desarrollo tecnológico, compromiso comunitario, costos operativos, cumplimiento legal e iniciativas sostenibles, asegurando el crecimiento e impacto del ecosistema.',
      pt: 'Os fundos serão alocados para desenvolvimento tecnológico, engajamento da comunidade, custos operacionais, conformidade legal e iniciativas sustentáveis, garantindo o crescimento e o impacto do ecossistema.'
    },
    id: '9'
  },
  {
    title: {
      en: 'How can I join the ICO presale for Sumak Kawsay?',
      es: '¿Cómo puedo unirme a la preventa ICO para Sumak Kawsay?',
      pt: 'Como posso participar da pré-venda ICO para Sumak Kawsay?'
    },
    content: {
      en: 'Use the Official Presale on Unifying.earth: Accessible by using a blockchain wallet or card at unifying.earth.',
      es: 'Usa la Preventa Oficial en Unifying.earth: Accesible mediante el uso de una billetera blockchain  tarjeta VISA, Google pay o paypal en unifying.earth.',
      pt: 'Use a pré-venda oficial em Unifying.earth: acessível usando um cartão VISA, Google Pay ou carteira blockchain em unifying.earth.'
    },
    id: '10'
  },
  {
    title: {
      en: 'What are the risks and how are they mitigated?',
      es: '¿Cuáles son los riesgos y cómo se mitigan?',
      pt: 'Quais são os riscos e como são mitigados?'
    },
    content: {
      en: 'While all investments carry risk, Sumak Kawsay is committed to transparency, legal compliance, and implementing strategic risk mitigation. We provide clear communication and adhere to international standards, ensuring a secure investment environment.',
      es: 'Aunque todas las inversiones conllevan riesgos, Sumak Kawsay se compromete con la transparencia, el cumplimiento legal y la implementación de mitigación de riesgos estratégicos. Proporcionamos una comunicación clara y nos adherimos a los estándares internacionales, asegurando un entorno de inversión seguro.',
      pt: 'Embora todos os investimentos carreguem riscos, o Sumak Kawsay está comprometido com a transparência, conformidade legal e implementação de mitigação de riscos estratégicos. Fornecemos comunicação clara e aderimos a padrões internacionais, garantindo um ambiente de investimento seguro.'
    },
    id: '11'
  }
]

const InfoContent = (): React.JSX.Element => {
  const { language } = useLanguage()
  const text: Record<number, Record<string, string>> = {
    1: {
      en: 'FAQ',
      es: 'Preguntas Frecuentes',
      pt: 'Perguntas Frequentes'
    }
  }
  return (
    <Element name='faq' className='w-full flex md:flex-col items-center py-20 flex-wrap justify-center'>
      <h1 className='text-3xl font-bold text-center mb-5'>{text[1][language]}</h1>
      <Card className='z-10 w-10/12 bg-background/50 border shadow-sm backdrop-filter backdrop-blur-lg'>
        <Accordion type="single" collapsible className="p-4">
          {Item.map((item, index) => (
            <AccordionItem key={index} value={item.id}>
            <AccordionTrigger>{item.title[language]}</AccordionTrigger>
            <AccordionContent>
              {item.content[language]}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </Element>
  )
}

export default InfoContent
