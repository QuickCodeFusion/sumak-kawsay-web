'use client'
import InfonToken from './InfoToken'
import InfoFooter from './InfoFooter'

const Footer = (): JSX.Element => {
  return (
    <footer
      className="relative mt-44 w-full bg-[url('/fondofooter.png')] bg-[center_bottom] bg-contain bg-no-repeat pb-32 md:pb-1"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 pb-1 pt-16 md:pt-24 lg:pt-32">
        <div className="relative space-y-12 pt-20">
          <InfonToken />
          <div className="pb-16 md:pb-52 lg:pb-[60vh] xl:pb">
            <InfoFooter />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
