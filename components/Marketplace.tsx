import Image from 'next/image'
export const Marketplace = (): JSX.Element => {
  return (
        <div >
            <h3 className="text-3xl text-center font-semibold">STELLAR MARKETPLACE</h3>
            <p className="w-10/12 mx-auto text-center text-xl">An innovative platform where community engagement meets economic
                revolution. Here, participants can interact using Ayni Coin to buy, sell services, and
                products, creating a vibrant marketplace. Our approach centers on:
            </p>
            <div className='lg:flex items-center justify-center lg:w-3/4 m-auto'>
                <Image className='mx-auto' src='/Ecosystem-BLANK.png' alt='Ecosystem-BLANK' width={500} height={500}/>
                <div className='w-full p-5 lg:w-3/4'>
                    <ul className='flex flex-col w-full p-5 gap-5 list-decimal'>
                        <li>
                            <p className='text-xl font-medium'>Asset Tokenization:</p>
                            Pioneering digital asset management, we transform real
                            estate, natural resources, cultural artifacts, and intellectual properties into
                            digital tokens. This strategy, integrated with AI and XR technology, fosters a
                            transparent, efficient market, simplifying investments while promoting
                            sustainability and prosperity.

                        </li>
                        <li>
                            <p className='text-xl font-medium'>Community Empowerment:</p>
                            As we centralize resources and skills, our
                            community gains independence, moving beyond traditional systems towards
                            self-sufficiency and collective strength.
                        </li>
                        <li>
                            <p className='text-xl font-medium'>Dynamic Interaction:</p>
                            Ayni Coin serves as the catalyst for exchanges within our
                            ecosystem, enhancing liquidity and broadening investment access.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
