const Video = (): JSX.Element => {
  return (
        <div className="m-20 w-full md:w-4/5">
            <iframe className="aspect-video w-full rounded border-none" src="https://www.youtube.com/embed/n20VMvjfRXc?si=LgTPY_KADrHgfEgG" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
  )
}

export default Video
