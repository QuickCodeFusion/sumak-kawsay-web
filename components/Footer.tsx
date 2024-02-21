'use client'
import BinanceWidget from './BinanceWidget'
import InfonToken from './InfoToken'
import InfoFooter from './InfoFooter'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col justify-between mt-5 h-[550px] w-screen">
      <BinanceWidget></BinanceWidget>
      <div className='w-full h-[350px] backdrop-blur bg-slate-400 pt-24'>
        <InfonToken></InfonToken>
        <InfoFooter></InfoFooter>
      </div>
    </footer>
  )
}

export default Footer
