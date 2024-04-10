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
        en: 'Phase 1: Establish the core structure and community foundation of the Sumak Kawsay Ecosystem.',
        es: 'Fase 1: Establecer la estructura central y la base comunitaria del Ecosistema Sumak Kawsay.',
        pt: 'Fase 1: Estabelecer a estrutura central e a base comunitária do Ecossistema Sumak Kawsay.'
      },
      content: {
        en: 'Establish digital and physical infrastructure. Launch the multi-token system and legal frameworks. Host first community Summits, Festivals and Gatherings. Build the first international holistic retreat sanctuary.',
        es: 'Establecer infraestructura digital y física. Lanzar el sistema multi-token y marcos legales. Organizar los primeros Encuentros, Festivales y Reuniones comunitarias. Construir el primer santuario de retiro holístico internacional.',
        pt: 'Estabelecer infraestrutura digital e física. Lançar o sistema multi-token e frameworks legais. Hospedar os primeiros Encontros, Festivais e Reuniões da comunidade. Construir o primeiro santuário de retiro holístico internacional.'
      },
      date: {
        en: '(Year 1 - 2)',
        es: '(Año 1 - 2)',
        pt: '(Ano 1 - 2)'
      }
    },
    {
      title: {
        en: 'Phase 2: Broaden our reach and improve our technological framework.',
        es: 'Fase 2: Ampliar nuestro alcance y mejorar nuestro marco tecnológico.',
        pt: 'Fase 2: Ampliar nosso alcance e melhorar nossa estrutura tecnológica.'
      },
      content: {
        en: 'Expand the Ecosystem land network and integrate indigenous and private reserves. Advance blockchain and AI integration for enhanced resource management. Open the Ecosystem Marketplace for wider product and service access.',
        es: 'Expandir la red de terrenos del Ecosistema e integrar reservas indígenas y privadas. Avanzar en la integración de blockchain y IA para una mejor gestión de recursos. Abrir el Mercado del Ecosistema para un acceso más amplio a productos y servicios.',
        pt: 'Expandir a rede de terras do Ecossistema e integrar reservas indígenas e privadas. Avançar na integração de blockchain e IA para melhor gestão de recursos. Abrir o Mercado do Ecossistema para acesso mais amplo a produtos e serviços.'
      },
      date: {
        en: '(Years 2-3)',
        es: '(Años 2-3)',
        pt: '(Anos 2-3)'
      }
    },
    {
      title: {
        en: 'Phase 3: Global Network and Political Influence',
        es: 'Fase 3: Red Global e Influencia Política',
        pt: 'Fase 3: Rede Global e Influência Política'
      },
      content: {
        en: 'Establishing a global network and gain political recognition. Implement a value-backed currency system and universal passport initiative. Form strategic alliances for broader global collaboration.',
        es: 'Establecer una red global y ganar reconocimiento político. Implementar un sistema de moneda respaldada por valores y una iniciativa de pasaporte universal. Formar alianzas estratégicas para una colaboración global más amplia.',
        pt: 'Estabelecer uma rede global e ganhar reconhecimento político. Implementar um sistema de moeda com respaldo de valor e iniciativa de passaporte universal. Formar alianças estratégicas para colaboração global mais ampla.'
      },
      date: {
        en: '(Years 3-4)',
        es: '(Años 3-4)',
        pt: '(Anos 3-4)'
      }
    },
    {
      title: {
        en: 'Phase 4: Sustainability and Autonomy.',
        es: 'Fase 4: Sostenibilidad y Autonomía.',
        pt: 'Fase 4: Sustentabilidade e Autonomia.'
      },
      content: {
        en: 'Achieving ecosystem self-sufficiency and independence. Attain full functionality. Secure global political approval and expand community reach.',
        es: 'Lograr la autosuficiencia e independencia del ecosistema. Alcanzar la plena funcionalidad. Obtener aprobación política global y expandir el alcance de la comunidad.',
        pt: 'Alcançar a auto-suficiência e independência do ecossistema. Atingir a funcionalidade completa. Obter aprovação política global e expandir o alcance da comunidade.'
      },
      date: {
        en: '(Years 4-5)',
        es: '(Años 4-5)',
        pt: '(Anos 4-5)'
      }
    },
    {
      title: {
        en: 'Phase 5: Pushing the boundaries in ecological conservation and global influence.',
        es: 'Fase 5: Ampliando los límites en la conservación ecológica y la influencia global.',
        pt: 'Fase 5: Ultrapassando os limites em conservação ecológica e influência global.'
      },
      content: {
        en: 'Influence global sustainability policies. Expand and implement regenerative practices on a larger scale. Showcase the global environmental and social impact of the ecosystem.',
        es: 'Influir en las políticas globales de sostenibilidad. Expandir e implementar prácticas regenerativas a mayor escala. Mostrar el impacto ambiental y social global del ecosistema.',
        pt: 'Influenciar políticas globais de sustentabilidade. Expandir e implementar práticas regenerativas em maior escala. Mostrar o impacto ambiental e social global do ecossistema.'
      },
      date: {
        en: '(Years 5-6)',
        es: '(Años 5-6)',
        pt: '(Anos 5-6)'
      }
    }
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
