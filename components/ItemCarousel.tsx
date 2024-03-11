import CarouselInfo from './CarouselInfo'
const items = [
  {
    id: '1',
    title: 'Common Treasure and Asset Tokenization',
    content: 'The currencies are backed by a collective treasury, strategically reinvesting in land and value chains. This foundation ensures that our currency is not just financially robust, but purpose-driven, echoing our commitment to sustainable prosperity'
  },
  {
    id: '2',
    title: 'Ethics',
    content: 'Ethics lie at the heart of our ecosystem, guiding every transaction to uphold principles of fairness, transparency, and sustainability. This approach fosters an environment of economic integrity, ensuring that our collective actions contribute positively to the greater good.'
  }
  /* {
    id: '3',
    title: 'Benefits & Returns',
    content: "Our currency extends beyond mere financial gain, offering dividends to token holders. This system incentivizes long-term investment, allowing participants to share in the prosperity and success cultivated by the ecosystem's growth, reinforcing a culture of mutual benefit and collective success."
  } */
]

const ItemCarousel = (): JSX.Element => {
  return (
        <div className='w-full flex flex-col items-center'>
            <CarouselInfo Item={items}></CarouselInfo>
        </div>
  )
}

export default ItemCarousel
