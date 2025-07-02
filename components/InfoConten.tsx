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
      en: 'What is the Abya Yala Global Resilience Fund?',
      es: '¿Qué es el Fondo de Resiliencia global Abya Yala?',
      pt: 'O que é o Abya Yala Global Resilience Fund?'
    },
    content: {
      en: 'The Global Peace Regeneration Fund is a blockchain-powered, community-driven, tokenized investment platform. It aims to generate positive financial returns while promoting regenerative projects that restore ecosystems, empower communities, and support the transition to a sustainable and resilient world.',
      es: 'Es una plataforma de inversión tokenizada, impulsada por blockchain y dirigida por la comunidad. Su objetivo es generar retornos financieros positivos mientras promueve proyectos regenerativos que restauran ecosistemas, empoderan comunidades y apoyan la transición hacia un mundo sostenible y resiliente.',
      pt: 'É uma plataforma de investimento tokenizada, alimentada por blockchain e liderada pela comunidade. O seu objetivo é gerar retornos financeiros positivos ao mesmo tempo que promove projetos regenerativos que restauram ecossistemas, capacitam comunidades e apoiam a transição para um mundo sustentável e resiliente.'
    },
    id: '1'
  },
  {
    title: {
      en: 'How does the fund use tokenization?',
      es: '¿Como utiliza el fondo tokenización?',
      pt: 'Como o fundo utiliza tokenização?'
    },
    content: {
      en: 'The fund uses tokenization to create fractional ownership of real-world assets (RWA), providing both large and small investors access to regenerative projects. Investors can stake in superincubators, earn APY, and vote on development priorities through the DAO. Tokenization ensures traceability in value chains, transparency in operations, and creates diverse financial instruments like green and social bonds, making investments accessible, accountable, and impactful.',
      es: 'El fondo emplea la tokenización para crear propiedad fraccionada de activos reales (RWA), permitiendo que tanto grandes como pequeños inversores accedan a proyectos regenerativos. Los inversores pueden stakear en superincubadoras, ganar APY y votar sobre prioridades de desarrollo a través de la DAO. La tokenización garantiza trazabilidad en las cadenas de valor, transparencia en las operaciones y crea instrumentos financieros como bonos verdes y sociales, haciendo las inversiones accesibles, responsables e impactantes.',
      pt: 'O Fundo Global de Regeneração para a Paz emprega a tokenização para criar propriedade fracionada de ativos reais (RWA), permitindo que grandes e pequenos investidores tenham acesso a projetos regenerativos. Os investidores podem apostar em superincubadoras, ganhar APY e votar nas prioridades de desenvolvimento através do DAO. A tokenização garante rastreabilidade nas cadeias de valor, transparência nas operações e cria instrumentos financeiros como títulos verdes e sociais, tornando os investimentos acessíveis, responsáveis ​​e impactantes.'
    },
    id: '2'
  },
  {
    title: {
      en: 'What makes the Sierra Nevada de Santa Marta the first pilot location?',
      es: '¿Por qué la Sierra Nevada de Santa Marta es la primera ubicación piloto?',
      pt: 'O que faz a Sierra Nevada de Santa Marta o primeiro local de pilotagem?'
    },
    content: {
      en: 'The Sierra Nevada de Santa Marta, considered the Heart of the World, is a sacred region guided by indigenous communities with deep environmental wisdom. It serves as the first superincubator, impacting sectors such as clean energy, agroforestry, and regenerative tourism while drawing from ancestral knowledge to shape sustainable development practices.',
      es: 'La Sierra Nevada de Santa Marta, considerada el Corazón del Mundo, es una región sagrada guiada por comunidades indígenas con profunda sabiduría ambiental. Es el primer superincubador, impactando sectores como energía limpia, agroforestería y turismo regenerativo, mientras integra conocimiento ancestral en prácticas de desarrollo sostenible.',
      pt: 'A Serra Nevada de Santa Marta, considerada o Coração do Mundo, é uma região sagrada guiada por comunidades indígenas com profunda sabedoria ambiental. É a primeira superincubadora, impactando setores como energia limpa, agrofloresta e turismo regenerativo, ao mesmo tempo que integra conhecimentos ancestrais em práticas de desenvolvimento sustentável.'
    },
    id: '3'
  },
  {
    title: {
      en: "What role do investors play in the fund's governance?",
      es: '¿Cuál es el papel de los inversores en la gobernanza del fondo?',
      pt: 'Qual é o papel dos investidores na governança dos fundos?'
    },
    content: {
      en: 'Investors actively participate through staking in superincubators. This gives them access to governance mechanisms within the Decentralized Autonomous Organization (DAO), enabling them to vote on project allocations and participate in strategic decision-making.',
      es: 'Los inversores participan activamente mediante el staking en superincubadoras, obteniendo acceso a mecanismos de gobernanza dentro de la Organización Autónoma Descentralizada (DAO). Esto les permite votar sobre la asignación de proyectos y participar en decisiones estratégicas.',
      pt: 'Os investidores participam ativamente apostando em superincubadoras, obtendo acesso a mecanismos de governança dentro da Organização Autônoma Descentralizada (DAO). Isso lhes permite votar na alocação de projetos e participar de decisões estratégicas.'
    },
    id: '4'
  },
  {
    title: {
      en: 'What is staking, and how does it work?',
      es: '¿Qué es el staking y cómo funciona?',
      pt: 'O que é staking e como funciona?'
    },
    content: {
      en: "Staking involves locking fractions of the Unity Seed Smart contract into the fund's superincubators for specified periods (1 to 5 years). In return, participants earn competitive APYs and exclusive benefits from the fund’s global decentralized ecosystem of projects and services. Staked tokens also grant voting rights in the DAO governance system.",
      es: 'El staking implica bloquear fracciones del contrato inteligente Unity Seed en las superincubadoras del fondo durante períodos específicos (de 1 a 5 años). A cambio, los participantes obtienen APYs competitivos y beneficios exclusivos del ecosistema global descentralizado de proyectos y servicios. Los tokens stakeados también otorgan derechos de voto en el sistema de gobernanza DAO.',
      pt: 'O staking envolve o bloqueio de frações do contrato inteligente Unity Seed nas superincubadoras do fundo por períodos específicos (1 a 5 anos). Em troca, os participantes obtêm APYs competitivos e benefícios exclusivos do ecossistema global descentralizado de projetos e serviços. Os tokens apostados também concedem direitos de voto no sistema de governança DAO.'
    },
    id: '5'
  },
  {
    title: {
      en: 'What kind of financial returns can investors expect?',
      es: '¿Qué tipo de retornos financieros pueden esperar los inversores?',
      pt: 'Que tipo de retorno financeiro os investidores podem esperar?'
    },
    content: {
      en: 'The fund offers diversified financial returns from tokenized assets across multiple sectors. Returns are enhanced through APY from staking, the appreciation of the smart contract value, and access to regenerative services, products, and benefits from the global decentralized catalog.',
      es: 'El fondo ofrece retornos diversificados a partir de activos tokenizados en múltiples sectores. Los retornos se maximizan a través del APY por staking, la apreciación del valor del contrato inteligente y el acceso a servicios, productos y beneficios regenerativos del catálogo descentralizado global.',
      pt: 'O fundo oferece retornos diversificados de ativos tokenizados em vários setores. Os retornos são maximizados através da aposta no APY, da valorização do valor do contrato inteligente e do acesso a serviços, produtos e benefícios regenerativos do catálogo global descentralizado.'
    },
    id: '6'
  },
  {
    title: {
      en: 'How is the fund aligned with Colombia’s national development goals?',
      es: '¿Cómo se alinea el fondo con los objetivos de desarrollo nacional de Colombia?',
      pt: 'Como o fundo se alinha com os objetivos de desenvolvimento nacional da Colômbia?'
    },
    content: {
      en: 'The fund supports Colombia’s National Development Plan by promoting bioeconomy, clean energy, and circular economies. It aligns with the government’s vision to position Colombia as a global sustainability leader, contributing to environmental restoration, social equity, and economic growth.',
      es: 'El fondo apoya el Plan Nacional de Desarrollo de Colombia promoviendo la bioeconomía, la energía limpia y las economías circulares. Se alinea con la visión del gobierno de posicionar a Colombia como líder global en sostenibilidad, contribuyendo a la restauración ambiental, equidad social y crecimiento económico.',
      pt: 'O fundo apoia o Plano Nacional de Desenvolvimento da Colômbia, promovendo a bioeconomia, a energia limpa e as economias circulares. Alinha-se com a visão do governo de posicionar a Colômbia como líder global em sustentabilidade, contribuindo para a restauração ambiental, a equidade social e o crescimento económico.'
    },
    id: '7'
  },
  {
    title: {
      en: 'What environmental and social impact does the fund aim to achieve?',
      es: '¿Qué impacto social y ambiental busca lograr el fondo?',
      pt: 'Que impacto social e ambiental o fundo pretende alcançar?'
    },
    content: {
      en: 'The fund seeks measurable impacts aligned with the United Nations Sustainable Development Goals (SDGs), including: SDG 13 - Climate Action through reforestation and carbon capture, SDG 15 - Life on Land through ecosystem restoration and biodiversity conservation, SDG 10 - Reduced Inequality through community empowerment and inclusive governance.',
      es: 'El fondo persigue impactos medibles alineados con los Objetivos de Desarrollo Sostenible (ODS), incluyendo: ODS 13: Acción Climática mediante reforestación y captura de carbono ODS 15: Vida en la Tierra a través de restauración de ecosistemas y conservación de la biodiversidad ODS 10: Reducción de las Desigualdades mediante empoderamiento comunitario y gobernanza inclusiva',
      pt: 'O fundo busca impactos mensuráveis ​​alinhados com os Objetivos de Desenvolvimento Sustentável (ODS), incluindo: ODS 13: Ação climática através do reflorestamento e captura de carbono ODS 15: Vida na Terra através da restauração de ecossistemas e conservação da biodiversidade ODS 10: Redução das desigualdades através do empoderamento comunitário e governança inclusiva'
    },
    id: '8'
  },
  {
    title: {
      en: 'How does the fund ensure transparency and accountability?',
      es: '¿Cómo garantiza el fondo la transparencia y la responsabilidad?',
      pt: 'Como é que o fundo garante a transparência e a responsabilização?'
    },
    content: {
      en: 'The blockchain-based platform ensures full traceability of investments and project outcomes. The DAO governance structure allows real-time tracking of decisions and fund allocation, ensuring transparency and accountability across all stakeholders.',
      es: 'La plataforma basada en blockchain garantiza la trazabilidad completa de las inversiones y los resultados de los proyectos. La estructura de gobernanza DAO permite seguimiento en tiempo real de decisiones y asignación de fondos, asegurando transparencia y responsabilidad entre todas las partes interesadas.',
      pt: 'A plataforma baseada em blockchain garante rastreabilidade completa dos investimentos e resultados dos projetos. A estrutura de governação do DAO permite o acompanhamento em tempo real das decisões e atribuição de fundos, garantindo transparência e responsabilização entre todas as partes interessadas.'
    },
    id: '9'
  },
  {
    title: {
      en: 'How can individuals and organizations participate in the fund?',
      es: '¿Cómo pueden participar individuos y organizaciones en el fondo?',
      pt: 'Como podem indivíduos e organizações participar no fundo?'
    },
    content: {
      en: 'Participation is open to everyone, from individual investors to large institutional funds. Investors can stake, join as collaborators or service providers, offer products and services through the marketplace, or engage with events, summits, eco-communities and regenerative projects worldwide.',
      es: 'La participación está abierta a todos, desde inversores individuales hasta grandes fondos institucionales. Los participantes pueden stakear, colaborar como proveedores de servicios, ofrecer productos a través del mercado, o involucrarse en eventos, ecoaldeas y proyectos regenerativos en todo el mundo.',
      pt: 'A participação é aberta a todos, desde investidores individuais até grandes fundos institucionais. Os participantes podem apostar, colaborar como prestadores de serviços, oferecer produtos através do mercado ou envolver-se em eventos, ecovilas e projetos regenerativos em todo o mundo.'
    },
    id: '10'
  }
  // {
  //   title: {
  //     en: 'What are the risks and how are they mitigated?',
  //     es: '¿Cuáles son los riesgos y cómo se mitigan?',
  //     pt: 'Quais são os riscos e como são mitigados?'
  //   },
  //   content: {
  //     en: 'While all investments carry risk, Sumak Kawsay is committed to transparency, legal compliance, and implementing strategic risk mitigation. We provide clear communication and adhere to international standards, ensuring a secure investment environment.',
  //     es: 'Aunque todas las inversiones conllevan riesgos, Sumak Kawsay se compromete con la transparencia, el cumplimiento legal y la implementación de mitigación de riesgos estratégicos. Proporcionamos una comunicación clara y nos adherimos a los estándares internacionales, asegurando un entorno de inversión seguro.',
  //     pt: 'Embora todos os investimentos carreguem riscos, o Sumak Kawsay está comprometido com a transparência, conformidade legal e implementação de mitigação de riscos estratégicos. Fornecemos comunicação clara e aderimos a padrões internacionais, garantindo um ambiente de investimento seguro.'
  //   },
  //   id: '11'
  // }
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
      <Card className='z-10 w-10/12 border shadow-sm backdrop-filter backdrop-blur-lg'>
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
