import { Element } from 'react-scroll'
import { Card } from './ui/card'
import { ListCard, ListCardContent, ListItem } from './ui/list'
import Image from 'next/image'

export const Tokenomics = (): JSX.Element => {
  const items = [
    {
      label: 'Official Presale: Available for three months on Unifying.Earth, aimed at initial ecosystem scaling.',
      value: '30%',
      color: 'bg-teal-400',
      border: 'border-teal-400'
    },
    {
      label: '12 Moons Presale: Locked over twelve months, providing opportunities for late investors to join at a favorable rate.',
      value: '20%',
      color: 'bg-cyan-600',
      border: 'border-cyan-600'
    },
    {
      label: "Locked for Unity Halving Schedule: Tokens are released in a phased approach inspired by Bitcoin's halving:",
      value: '30%',
      children: ['Years 1-4: 15% released, with the remaining 15% locked.',
        'Years 5-8: An additional 7.5% released, with the remaining 7.5% locked.',
        'Subsequent Cycles: Continue until all tokens are distributed, aligning with ecosystem milestones.'],
      color: 'bg-sky-600',
      border: 'border-sky-600'
    },
    {
      label: 'Community Incentives',
      value: '5%',
      color: 'bg-blue-800',
      border: 'border-blue-800'
    },
    {
      label: 'Foundation NGO',
      value: '4%',
      color: 'bg-purple-900',
      border: 'border-purple-900'
    },
    {
      label: 'Treasury',
      value: '5%',
      color: 'bg-fuchsia-900',
      border: 'border-fuchsia-900'
    },
    {
      label: 'Airdrops',
      value: '1%',
      color: 'bg-pink-600',
      border: 'border-pink-600'
    }
  ]
  return (
        <Element name='tokenomics' className='flex flex-wrap justify-around items-center w-full text-center px-4 py-20'>
          <div>
            <h1 className='text-3xl font-bold'>Tokenomics</h1>
            <h3 className='text-xl font-semibold mb-2'>Token Distribution and Unity Halving Schedule:</h3>
            <Card className='bg-background/40 backdrop-blur p-6 border shadow-sm md:grid grid-cols-2 place-content-center place-items-center'>
              <Image className='w-[410px] md:h-[390px] mt-7 rounded-full' src='/grafica.png' width={400} height={400} alt='graph' />
              <ListCard className=''>
              {items.map((item, index) => (
                  <ListItem className={`border-b-2 ${item.border}`} key={index}>
                      <ListCardContent className='w-full text-start'>
                          <span className='flex md:flex-row flex-col justify-start w-full items-end gap-1'>
                              <div className='flex items-center gap-1'><div className={`w-3 h-3 rounded-full ${item.color}`} ></div><p className='text-md font-bold'>{item.value}</p></div>
                              <p className='text-md font-semibold'>{item.label}</p>
                          </span>
                          {item.children &&
                          (
                              <ul className='list-disc ml-5'>
                                  {item.children.map((child, index) => (
                                      <li key={index}>{child}</li>
                                  ))}
                              </ul>
                          )
                              }
                      </ListCardContent>
                  </ListItem>
              ))}
              </ListCard>
            </Card>
          </div>
        </Element>
  )
}
