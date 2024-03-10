import Image from 'next/image'
export const Fractional = (): JSX.Element => {
  return (
        <div >
            <h3 className="text-3xl text-center font-semibold">Explore Shambhala Bio-habitats: A New Dimension of
                Living
            </h3>
            <p className="w-10/12 mx-auto text-center ">Pioneering sustainable living solutions,
                Sumak Kawsay introduces Shambhala Smart
                Habitats and Fractional Real Estate to foster fractional ownership opportunities in
                dynamic, adaptable living environments. These spaces are designed to meet the
                evolving interests and needs of the community, supporting diverse lifestyles and
                sustainable productive systems.
            </p>
            <div className='md:flex place-items-center md:w-3/4 m-auto'>
                <div className='p-5'>
                    <ul className='flex flex-col w-full p-5 gap-5'>
                        <li>
                            <p className='text-xl font-medium'>Virtual Reality Tors:</p>
                            Step into the
                            future with VR
                            tours of our
                            Bio-Towns.
                            Experience the
                            serene landscapes,
                            innovative living
                            spaces, and vibrant
                            community life
                            from anywhere in
                            the world.
                        </li>
                        <li>
                            <p className='text-xl font-medium'>Fractional Ownership Opportunities:</p>
                            Learn how you can
                            become a part of
                            this revolutionary
                            concept through
                            fractional real
                            estate, making
                            sustainable living
                            accessible and
                            affordable.
                        </li>
                        <li>
                            <p className='text-xl font-medium'>Community Shaping:</p>
                            Your
                            voice matters. With
                            every investment,
                            gain the power to
                            shape the future of
                            your Bio-Town
                            through direct
                            voting and
                            proposals.
                        </li>
                    </ul>
                </div>
                <Image className='mx-auto' src="/blueSky.png" alt="blueSky" width={500} height={500}/>
            </div>
        </div>
  )
}
