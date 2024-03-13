import CarouselInfo from './CarouselInfo'
const info = [
  { title: 'Sovereignty', description: 'Decentralized Governance, Asset tokenization, Dedicated Blockchain, Universal ID Passport, Enhanced Privacy and Security, Global Crisis Response, Regenerative Output, High Yield, Quality.', icon: '/Ecosystem1.png', id: 1 },
  { title: 'Living and Virtual Platform', description: 'Smart Habitats, Global Marketplace, Advanced NFT & Metaverse, Biosphere 3.0, AI and Blockchain.', icon: '/Ecosystem2.png', id: 2 },
  { title: 'Global Interdependence', description: 'Collective Treasure, Value Chains, Dividends, Articulation Interaction & Exchange, Financial System Transformation, Unified Actions for Life and Earth', icon: '/Ecosystem3.png', id: 3 }
]

const ItemCarousel = (): JSX.Element => {
  return (
        <div className='w-full my-16 flex flex-col items-center'>
          <h2 className='w-full mb-5 text-3xl text-center font-semibold z-10'> The 3 pillars of our strong ecosystem.</h2>
          <p className='text-center text-xl pb-6'>The ecosystem</p>
          <CarouselInfo Item={info}></CarouselInfo>
        </div>
  )
}

export default ItemCarousel
