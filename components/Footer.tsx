'use client'
import InfonToken from './InfoToken'
import InfoFooter from './InfoFooter'

const Footer = (): JSX.Element => {
  return (
    <footer className='w-full mt-44 bg-[url("/fondofooter.png")] bg-[53%_100%] h-[90%] md:h-[125%] bg-no-repeat bg-contain'>
      <div className='container pb-8 pt-16 md:pt-24 lg:pt-32'>
        <div className='relative pt-20'>
          <InfonToken/>
          <InfoFooter/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
