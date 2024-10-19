import { Element } from 'react-scroll'
import { Card } from './ui/card'
import { Timeline, TimelineDate, TimelineItem, TimelineTitle } from './ui/timeline'
import { useLanguage } from '@/app/languageProvider'

export const Roadmap = (): React.JSX.Element => {
  const timelineItems: Array<{
    title: Record<string, string>
    content: Record<string, string>
    date: Record<string, string>
  }> = [
    {
      title: {
        en: 'Phase 1: Pilot in the Sierra Nevada, Colombia.',
        es: 'Fase 1: Piloto en la Sierra Nevada, Colombia.',
        pt: 'Fase 1: Piloto na Sierra Nevada, Colombia.'
      },
      content: {
        en: 'Implementation of the first superincubator in the Sierra Nevada, launch of the ERC 1400 contract, and creation of the initial portfolio focused on regeneration, clean energy, and agroforestry.',
        es: 'Implementación del primer superincubador en la Sierra Nevada, lanzamiento del contrato ERC 1400, y creación del portafolio inicial, enfocado en regeneración, energía limpia y agroforestería.',
        pt: 'Implementação do primeiro superincubador na Sierra Nevada, lançamento do contrato ERC 1400 e criação do portfólio inicial focado em regeneração, energia limpa e agroflorestação.'
      },
      date: {
        en: '(0-1 years)',
        es: '(0-1 años)',
        pt: '(0-1 anos)'
      }
    },
    {
      title: {
        en: 'Phase 2: Expansion and Partnerships.',
        es: 'Fase 2: Expansión y Alianzas.',
        pt: 'Fase 2: Expansão e Parcerias.'
      },
      content: {
        en: 'Growth into new bioregions through strategic alliances, development of key infrastructure, issuance of new financial instruments, and strengthening of decentralized governance.',
        es: 'Crecimiento hacia nuevas bioregiones mediante alianzas estratégicas, desarrollo de infraestructura clave, emisión de nuevos instrumentos financieros y fortalecimiento de la gobernanza descentralizada.',
        pt: 'Crescimento para novas biorregiões por meio de alianças estratégicas, desenvolvimento de infraestrutura essencial, emissão de novos instrumentos financeiros e fortalecimento da governança descentralizada.'
      },
      date: {
        en: '(2-6 years)',
        es: '(2-6 años)',
        pt: '(2-6 anos)'
      }
    },
    {
      title: {
        en: 'Phase 3: Global Market and Ecosystem Connectivity',
        es: 'Fase 3: Mercado Global y Conexión de Ecosistemas',
        pt: 'Fase 3: Mercado Global e Conectividade de Ecossistemas'
      },
      content: {
        en: 'Global integration with a decentralized market for regenerative products, technological interconnection of ecosystems, and the consolidation of a positive impact on economic, social, and environmental levels.',
        es: 'Integración global con un mercado descentralizado para productos regenerativos, interconexión tecnológica de ecosistemas y consolidación de un impacto positivo en lo económico, social y ambiental.verdes.',
        pt: 'Integração global com um mercado descentralizado para produtos regenerativos, interconexão tecnológica de ecossistemas e consolidação de um impacto positivo nos níveis econômico, social e ambiental.'
      },
      date: {
        en: '(6-11 years)',
        es: '(6-11 años)',
        pt: '(6-11 anos)'
      }
    }
    // {
    //   title: {
    //     en: 'Phase 4: Sustainability and Autonomy.',
    //     es: 'Fase 4: Sostenibilidad y Autonomía.',
    //     pt: 'Fase 4: Sustentabilidade e Autonomia.'
    //   },
    //   content: {
    //     en: 'Achieving ecosystem self-sufficiency and independence. Attain full functionality. Secure global political approval and expand community reach.',
    //     es: 'Lograr la autosuficiencia e independencia del ecosistema. Alcanzar la plena funcionalidad. Obtener aprobación política global y expandir el alcance de la comunidad.',
    //     pt: 'Alcançar a auto-suficiência e independência do ecossistema. Atingir a funcionalidade completa. Obter aprovação política global e expandir o alcance da comunidade.'
    //   },
    //   date: {
    //     en: '(Years 4-5)',
    //     es: '(Años 4-5)',
    //     pt: '(Anos 4-5)'
    //   }
    // },
    // {
    //   title: {
    //     en: 'Phase 5: Pushing the boundaries in ecological conservation and global influence.',
    //     es: 'Fase 5: Ampliando los límites en la conservación ecológica y la influencia global.',
    //     pt: 'Fase 5: Ultrapassando os limites em conservação ecológica e influência global.'
    //   },
    //   content: {
    //     en: 'Influence global sustainability policies. Expand and implement regenerative practices on a larger scale. Showcase the global environmental and social impact of the ecosystem.',
    //     es: 'Influir en las políticas globales de sostenibilidad. Expandir e implementar prácticas regenerativas a mayor escala. Mostrar el impacto ambiental y social global del ecosistema.',
    //     pt: 'Influenciar políticas globais de sustentabilidade. Expandir e implementar práticas regenerativas em maior escala. Mostrar o impacto ambiental e social global do ecossistema.'
    //   },
    //   date: {
    //     en: '(Years 5-6)',
    //     es: '(Años 5-6)',
    //     pt: '(Anos 5-6)'
    //   }
    // }
  ]

  const text: Record<string, Record<string, string>> = {
    1: {
      en: 'Journey Through Time: Our Roadmap',
      es: 'Viaje a Través del Tiempo: Nuestra Hoja de Ruta',
      pt: 'Jornada Através do Tempo: Nosso Roteiro'
    },
    2: {
      en: 'Explore the milestones that mark our shared path towards transformation',
      es: 'Explora los hitos que marcan nuestro camino compartido hacia la transformación',
      pt: 'Explore os marcos que definem nosso caminho compartilhado para a transformação'
    }
  }

  const { language } = useLanguage()
  return (

    <Element name='roadMap' className='p-4 py-20 text-center flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>{text[1][language]}</h1>
      <p className='my-4 text-lg'>{text[2][language]}</p>
         <Card className='mx-2 md:w-2/3 pr-6 text-start border shadow-sm'>
      <Timeline>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineTitle>{item.title[language]}</TimelineTitle>
            <TimelineDate>{item.date[language]}</TimelineDate>
            <p>{item.content[language]}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
    </Element>
  )
}
