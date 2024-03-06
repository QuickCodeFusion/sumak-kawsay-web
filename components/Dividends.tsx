import Image from 'next/image'
export const Dividends = (): JSX.Element => {
  return (
        <div >
            <h3 className="text-3xl text-center font-semibold text-white">Dividends and Staking: A Path to Universal Income</h3>
            <p className="w-10/12 mx-auto text-center ">Experience the joy of giving and receiving. Engage with our ecosystem, stake your
                tokens, and earn dividends.
            </p>
            <p className="text-center font-semibold text-2xl">Empowerment Tiers of Engagement:</p>
            <div className='md:flex items-center justify-center w-3/4 m-auto'>
                <div>
                    <Image className='rounded-full shadow-violet-500 border-vivid-violet-500 shadow-lg' src='/innovation.webp' alt='passport' width={300} height={300} />
                </div>
                <div className='p-5 md:w-3/4'>
                    <ul className='flex flex-col w-full p-5 gap-5'>
                        <li>
                            <p className='text-xl font-medium'>Unity Tier:</p>
                            This is yourstarting point
                            within the Sumak Kawsay collective,
                            offering an introduction to
                            our values and initial dividends.
                            It represents the foundational
                            step towards inclusivity and
                            shared purpose, aligning with our
                            ethos and community spirit
                        </li>
                        <li>
                            <p className='text-xl font-medium'>Growth Tier:</p>
                            For members increasing their
                            involvement, this tier provides
                            greater dividends and signifies a
                            deeper commitment to our collective
                            future. It represents a middle ground
                            for those actively contributing to
                            and engaging with our ecosystem is
                            expansion.
                        </li>
                        <li>
                            <p className='text-xl font-medium'>Heritage Tier:</p>
                            The highest level, rewarding
                            our most committed members,
                            symbolizing a significant ontribution to
                            our vision and goals. This tier is
                            for those aiming to create a
                            meaningful, lasting impact, ensuring a
                            legacy of prosperity, sustainability,
                            and community well-being.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
