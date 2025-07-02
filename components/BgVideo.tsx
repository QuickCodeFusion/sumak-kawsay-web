// import Image from 'next/image'

const BgVideo = (): JSX.Element => {
  return (
    <div className="absolute inset-0 inset-y-16 h-[180vh] md:h-full w-full overflow-hidden bg-no-repeat bg-[53%_100%] bg-[length:325%] bg-norepeat md:bg-[length:200%] md:pb-0 -z-50 bg-[url('/fondofooter.png')]">
        {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="inset-0 h-full w-full object-center object-contain scale-150 lg:h-[120hv] hidden md:block"
        >
            <source src="/Planetapaper.mp4" />
            Tu navegador no admite la reproducción de videos.
        </video> */}
          {/* <Image src="/bg6000.jpg" className='w-full object-cover h-full md:hidden' alt="bg" width={400} height={400} /> */}
    </div>
  )
}

export default BgVideo
