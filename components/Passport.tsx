import Image from 'next/image'
export const Passport = (): JSX.Element => {
  return (
        <div className='w-full flex flex-col justify-center'>
            <h3 className="text-3xl text-center font-semibold pb-2">Universal Passport Framework</h3>
            <p className="text-center font-semibold text-2xl pb-4">Your Key to a Global Community</p>
            <p className="w-10/12 mx-auto text-center text-xl">This pioneering initiative offers you unparalleled access to our ecosystem&apos;s
                resources, unifying community members in our shared vision for a sustainable
                future
            </p>
            <div className='flex flex-col lg:flex-row md:w-3/4 self-center place-items-center p-5'>
                <div className='p-5 flex flex-col items-center gap-6'>
                <p className='text-xl'>Benefits and Security</p>
                <ul className='flex  flex-col gap-5 list-disc pl-5'>
                    <li>Global Mobility and Unity: The
                        Universal Passport acts as a symbol
                        of unity, offering token holders the
                        freedom to move and access,
                        experiences and resources across
                        the ecosystem, fostering a strong
                        sense of belonging and global
                        citizenship.
                    </li>
                    <li>Safety and Well-being: In times of
                        geopolitical unrest, the passport
                        prioritizes holder safety, facilitating
                        swift rescue and relocation to safer
                        environments within our extensive
                        network.
                    </li>
                    <li>Identity and Community: Empowers
                        holders with a unique identity that
                        transcends national boundaries,
                        promoting a global citizen ethos and
                        ensuring you are never isolated or
                        vulnerable.
                    </li>
                </ul>
                </div>
                <Image className='drop-shadow-2xl shadow-shadow' src='/passport 2.png' alt='passport' width={300} height={300}/>
            </div>
        </div>
  )
}
