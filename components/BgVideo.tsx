const BgVideo = (): JSX.Element => {
  return (
    <div className="absolute inset-0 h-[180vh] md:h-full w-full overflow-hidden -z-10">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="inset-0 h-full w-full object-center object-cover scale-150 "
        >
            <source src={'fondo.mp4'}/>
        </video>
    </div>
  )
}

export default BgVideo
