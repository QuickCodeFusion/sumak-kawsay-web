import { Element } from 'react-scroll'
import { Card } from './ui/card'
import { ListCard, ListCardContent, ListItem } from './ui/list'
import { useLanguage } from '@/app/languageProvider'
import PieChartComponent from './ui/piechart'

type NestedText = Array<{
  label: Record<string, string>
  value: string
  color: string
  border?: string
  children?: Array<Record<string, string>>
}>
export const Tokenomics = (): JSX.Element => {
  const items: NestedText = [
    {
      label: {
        en: 'Official Presale: Available for three months at Unifying.Earth, aimed at initial ecosystem scaling.',
        es: 'Preventa Oficial: Disponible durante tres meses en Unifying.Earth, destinada a la escala inicial del ecosistema.',
        pt: 'Pré-venda Oficial: Disponível por três meses em Unifying.Earth, visando a escalada inicial do ecossistema.'
      },
      value: '33%',
      color: '#2dd4bf',
      border: 'border-teal-400'
    },
    {
      label: {
        en: 'CEX & DEX: Intended to guarantee liquidity in centralized and decentralized exchanges.',
        es: 'CEX & DEX: Destinados a garantizar la liquidez en intercambios centralizados y descentralizados.',
        pt: 'CEX & DEX: Destinados a garantir a liquidez em trocas centralizadas e descentralizadas.'
      },
      value: '33%',
      color: '#0891b2',
      border: 'border-cyan-600'
    },
    {
      label: {
        en: "Locked for Unity Halving Schedule: Tokens are released in a phased approach inspired by Bitcoin's halving:",
        es: 'Bloqueado para el Calendario de Halving de Unity: Los tokens se liberan en un enfoque por fases inspirado en el halving de Bitcoin:',
        pt: 'Bloqueado para a Agenda de Halving da Unity: Tokens são liberados em uma abordagem faseada inspirada no halving do Bitcoin:'
      },
      value: '33%',
      children: [
        {
          en: 'Years 1-4: 15% released, with the remaining 15% locked.',
          es: 'Años 1-4: Se libera el 15%, con el 15% restante bloqueado.',
          pt: 'Anos 1-4: 15% liberado, com os 15% restantes bloqueados.'
        },
        {
          en: 'Years 5-8: An additional 7.5% released, with the remaining 7.5% locked.',
          es: 'Años 5-8: Se libera un 7.5% adicional, con el 7.5% restante bloqueado.',
          pt: 'Anos 5-8: Mais 7.5% liberado, com os 7.5% restantes bloqueados.'
        },
        {
          en: 'Subsequent Cycles: Continue until all tokens are distributed, aligning with ecosystem milestones.',
          es: 'Ciclos Subsecuentes: Continuar hasta que todos los tokens sean distribuidos, alineándose con los hitos del ecosistema.',
          pt: 'Ciclos Subsequentes: Continuam até todos os tokens serem distribuídos, alinhando-se com marcos do ecossistema.'
        }
      ],
      color: '#0284c7',
      border: 'border-sky-600'
    },
    {
      label: {
        en: 'Community Incentives & Airdrops: Token reserve intended to reward community members for various actions that contribute to the growth and success of the project.',
        es: 'Incentivos Comunitarios & Airdrops: Reserva de tokens destinada a recompensar a los miembros de la comunidad por diversas acciones que contribuyen al crecimiento y éxito del proyecto.',
        pt: 'Incentivos Comunitários & Airdrops: Reserva de tokens destinada a recompensar membros da comunidade por diversas ações que contribuem para o crescimento e sucesso do projeto.'
      },
      value: '1%',
      color: '#1e40af',
      border: 'border-blue-800'
    }
  ]

  const text: Record<string, Record<string, string>> = {
    1: {
      en: 'Tokenomics',
      es: 'Tokenomics',
      pt: 'Tokenomics'
    },
    2: {
      en: 'Token Distribution and Unity Halving Schedule',
      es: 'Distribución de Tokens y Calendario de Halving de Unity',
      pt: 'Distribuição de Tokens e Agenda de Halving da Unity'
    }
  }

  const { language } = useLanguage()
  return (
        <Element name='tokenomics' className='flex flex-col gap-4 flex-wrap justify-around items-center w-full text-center px-4 py-20'>
            <h1 className='text-3xl font-bold mb-4'>{text[1][language]}</h1>
            <h3 className='text-xl font-semibold mb-4'>{text[2][language]}</h3>
            <Card className='backdrop-blur p-6 border shadow-sm lg:grid grid-cols-2 place-content-center place-items-center md:w-2/3'>
              <PieChartComponent
                data={items.map((item) => ({
                  title: item.label[language],
                  value: +item.value.replace('%', ''),
                  color: item.color
                }))}
              />
              <ListCard className='h-full'>
              {items.map((item, index) => (
                  <ListItem className={`border-b-2 ${item.border}`} key={index}>
                      <ListCardContent className='w-full text-start'>
                          <span className='flex md:flex-row flex-col justify-start w-full items-end gap-1'>
                              <div className='flex items-center gap-1 self-start'><div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }} ></div><p className='text-md font-bold'>{item.value}</p></div>
                              <p className='text-md font-semibold'>{item.label[language]}</p>
                          </span>
                          {item.children &&
                          (
                              <ul className='list-disc ml-5'>
                                  {item.children.map((child, index) => (
                                      <li key={index}>{child[language]}</li>
                                  ))}
                              </ul>
                          )
                              }
                      </ListCardContent>
                  </ListItem>
              ))}
              </ListCard>
            </Card>
        </Element>
  )
}
