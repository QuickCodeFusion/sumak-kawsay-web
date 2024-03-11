import Image from 'next/image'
export const Dividends = (): JSX.Element => {
  return (
        <div >
            <h3 className="text-3xl text-center font-semibold">Dividends and Staking: A Path to Universal Income</h3>
            <p className="w-10/12 mx-auto text-center ">Experience the joy of giving and receiving. Engage with our ecosystem, stake your
                tokens, and earn dividends.
            </p>
            <p className="text-center font-semibold text-2xl mb-5">Empowerment Tiers of Engagement:</p>
            <div className='md:flex items-center justify-center flex-col md:w-3/4 m-auto gap-10'>
                <div className="flex items-center justify-center gap-5 flex-wrap flex-col lg:flex-row">
                    <Image src="/level1.png" alt="unity" width={250} height={250}/>
                    <div className="lg:w-1/2 ">
                        <p className='text-xl font-medium'>Unity Tier:</p>
                        This is yourstarting point
                        within the Sumak Kawsay collective,
                        offering an introduction to
                        our values and initial dividends.
                        It represents the foundational
                        step towards inclusivity and
                        shared purpose, aligning with our
                        ethos and community spirit

                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 flex-wrap flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/2">
                    <p className='text-xl font-medium'>Growth Tier:</p>
                    For members increasing their
                    involvement, this tier provides
                    greater dividends and signifies a
                    deeper commitment to our collective
                    future. It represents a middle ground
                    for those actively contributing to
                    and engaging with our ecosystem is
                    expansion.

                    </div>
                    <Image src="/level2.png" alt="unity" width={250} height={250}/>
                </div>
                <div className="flex items-center justify-center gap-5 flex-wrap flex-col lg:flex-row">
                    <Image src="/level3.png" alt="unity" width={150} height={150}/>
                    <div className="lg:w-1/2">
                    <div>
                    <p className='text-xl font-medium'>Heritage Tier:</p>
                    The highest level, rewarding
                    our most committed members,
                    symbolizing a significant ontribution to
                    our vision and goals. This tier is
                    for those aiming to create a
                    meaningful, lasting impact, ensuring a
                    legacy of prosperity, sustainability,
                    and community well-being.
                </div>

                    </div>
                </div>
            </div>
        </div>
  )
}
