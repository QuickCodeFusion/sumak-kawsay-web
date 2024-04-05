const BgVideo = (): JSX.Element => {
  return (
    <div className="absolute inset-0 h-[180vh] md:h-full w-full overflow-hidden bg-cover bg-no-repeat bg-center -z-10">
      <img src="/fondoMujer.jpeg" alt="" />
        {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="inset-0 h-full w-full object-center object-cover scale-150 lg:h-[120hv]  "
        >
            <source src="/outputshorter.mp4" />
            Tu navegador no admite la reproducción de videos.
        </video> */}
    </div>
  )
}

export default BgVideo
