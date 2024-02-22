import { CardList } from './CardList'
import { CardWithIcon } from './CardWithIcon'

export const InfoItemsList = (): JSX.Element => {
  const info = [
    { title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', icon: '/binance.png' },
    { title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', icon: '/binance.png' },
    { title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', icon: '/binance.png' },
    { title: 'Title', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', icon: '/binance.png' }
  ]
  return (
    <CardList>

      {info.map((item, index) => (
        <CardWithIcon key={index} item={item}/>
      ))}
    </CardList>

  )
}
