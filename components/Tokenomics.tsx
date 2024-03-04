import { Element } from 'react-scroll'
import { Card } from './ui/card'
import { ListCard, ListCardContent, ListItem } from './ui/list'

export const Tokenomics = (): JSX.Element => {
  const items = [
    {
      label: 'Official Presale: Available for three months on Unifying.Earth, aimed at initial ecosystem scaling.',
      value: '30%'
    },
    {
      label: '12 Moons Presale: Locked over twelve months, providing opportunities for late investors to join at a favorable rate.',
      value: '20%'
    },
    {
      label: "Locked for Unity Halving Schedule: Tokens are released in a phased approach inspired by Bitcoin's halving:",
      value: '30%',
      children: ['Years 1-4: 15% released, with the remaining 15% locked.',
        'Years 5-8: An additional 7.5% released, with the remaining 7.5% locked.',
        'Subsequent Cycles: Continue until all tokens are distributed, aligning with ecosystem milestones.']
    },
    {
      label: 'Community Incentives',
      value: '5%'
    },
    {
      label: 'Foundation NGO',
      value: '4%'
    },
    {
      label: 'Treasury',
      value: '5%'
    },
    {
      label: 'Airdrops',
      value: '1%'
    }
  ]
  return (
        <Element name='tokenomics' className='text-center px-4'>
            <h1 className='text-3xl font-bold'>Tokenomics</h1>
            <h3 className='text-xl font-semibold mb-2'>Token Distribution and Unity Halving Schedule:</h3>
            <Card className='bg-background/40 backdrop-blur p-6 border-none'>
                <ListCard>
                {items.map((item, index) => (
                    <ListItem className='border-egg-800' key={index}>
                        <ListCardContent className='w-full'>
                            <span className='flex md:flex-row flex-col justify-between w-full'>
                                <p className='text-md font-semibold'>{item.label}</p>
                                <p className='text-md font-bold'>{item.value}</p>
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

        </Element>
  )
}
