export const Marketplace = (): JSX.Element => {
  return (
        <div >
            <h3 className="text-3xl text-center font-semibold text-white">STELLAR MARKETPLACE</h3>
            <p className="w-10/12 mx-auto text-center ">An innovative platform where community engagement meets economic
                revolution. Here, participants can interact using Ayni Coin to buy, sell services, and
                products, creating a vibrant marketplace. Our approach centers on:
            </p>
            <div className='md:flex items-center justify-center w-3/4 m-auto'>
                <div className="sketchfab-embed-wrapper">
                    <iframe className="h-[300px] rounded-full" title="Galxy Passport" frameBorder="0" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/1b4123c147954bd6922b605cd664b57a/embed?ui_theme=dark"> </iframe>
                    <p className="text-sm text-center text-[#4A4A4A]">
                        <a href="https://sketchfab.com/SPARKERA?utm_medium=embed&utm_campaign=share-popup&utm_content=e3cf2f1ed20b425b96bc0522cf91bb8c" target="_blank" rel="nofollow noreferrer" className="font-bold text-[#1CAAD9]">
                        SPARKERA
                        </a>
                        on
                        <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e3cf2f1ed20b425b96bc0522cf91bb8c" target="_blank" rel="nofollow noreferrer" className="font-bold text-[#1CAAD9]">
                            Sketchfab
                        </a>
                    </p>
                </div>
                <div className='p-5 md:w-3/4'>
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
