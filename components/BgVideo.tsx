import Image from 'next/image'

const BgVideo = (): JSX.Element => {
  return (
    <div className="absolute inset-0 h-[180vh] md:h-full w-full overflow-hidden bg-cover bg-no-repeat bg-center md:pb-0 -z-10">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="inset-0 h-full w-full object-center object-cover scale-150 lg:h-[120hv] hidden md:block"
        >
            <source src="/bgVideo.mp4" />
            Tu navegador no admite la reproducción de videos.
        </video>
          <Image src="/bg6000.jpg" className='w-full object-cover h-full md:hidden' alt="bg" width={400} height={400} />
    </div>
  )
}

export default BgVideo
