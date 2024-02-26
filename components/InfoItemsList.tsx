import { CardList } from './CardList'
import { CardWithIcon } from './CardWithIcon'

export const InfoItemsList = (): JSX.Element => {
  const info = [
    { title: 'Sovereignty', description: 'Decentralized Governance, Asset tokenization, Dedicated Blockchain, Universal ID Passport, Enhanced Privacy and Security, Global Crisis Response, Regenerative Output, High Yield, Quality.', icon: '/sov.jpg' },
    { title: 'Living and Virtual Platform', description: 'Smart Habitats, Global Marketplace, Advanced NFT & Metaverse, Biosphere 3.0, AI and Blockchain.', icon: '/liv.jpg' },
    { title: 'Global Interdependence', description: 'Collective Treasure, Value Chains, Dividends, Articulation Interaction & Exchange, Financial System Transformation, Unified Actions for Life and Earth', icon: '/glo.jpg' }
  ]
  return (
    <div>
      <h2 className='w-full mb-5 text-3xl text-center font-semibold text-amber-100 z-10'> Three core attributes characterize the Ecosystem cryptocurrencies.</h2>
      <CardList >

        {info.map((item, index) => (
          <CardWithIcon key={index} item={item}/>
        ))}
      </CardList>

    </div>

  )
}
