'use client'
import BinanceWidget from './BinanceWidget'
import InfonToken from './InfoToken'
import InfoFooter from './InfoFooter'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col justify-between mt-5 h-3/6 w-full">
      <BinanceWidget></BinanceWidget>
      <div className='w-full h-1/6 backdrop-blur bg-amber-950  pt-28 mt-16'>
        <InfonToken></InfonToken>
        <InfoFooter></InfoFooter>
      </div>
    </footer>
  )
}

export default Footer
