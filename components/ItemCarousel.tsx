import CarouselInfo from './CarouselInfo'
const info = [
  { title: 'Sovereignty', description: 'Our ecosystem embraces decentralized governance and asset tokenization to promote inclusive growth and equity. We prioritize stewardship of natural resources and the creation of a global career gateway, leveraging our collective infrastructure. Our model includes a fractional real estate portfolio and a dedicated blockchain to ensure universal identification, enhanced privacy, and security. We are committed to a global framework that leads to regenerative outcomes, high performance, and quality standards.', icon: '/Ecosystem1.png' },
  { title: 'Living and Virtual Platform', description: 'We are developing a new kind of navigation in Extended Reality (XR) settings, combining Web 3.0 and decentralized finance (DeFi) to create an all-encompassing global marketplace. Our ecosystem features smart bio-habitats, customized tokens, and state-of-the-art wearable NFTs, all underpinned by blockchain and IoT technologies for superior automation. Driven by artificial intelligence, our platform sets a standard for efficiency and innovative progress.', icon: '/Ecosystem2.png' },
  { title: 'Global Interdependence', description: 'We advocate for a globally interdependent framework, utilizing a collective treasure system to refine value chains and enhance productivity, thereby fostering dividends. Our model is built on strong articulation, interaction, and exchange, aimed at revolutionizing the financial landscape. Backed by a solid legal structure and supported by advanced big data analytics, our initiatives promote unified efforts towards the preservation of life and nature\'s rights, ensuring a harmonious and interconnected existence.', icon: '/Ecosystem3.png' }
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
