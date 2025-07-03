'use client'
import Image from 'next/image'
import { useEffect } from 'react'

const BinanceWidget = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.9.min.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <section className='flex flex-col gap-8 w-full'>
      <Image className='p-0 -mt-48 scale-125 md:scale-110' src={'/fondofooter.png'} alt='fondo indigena' height={500} width={2000}></Image>

      <div className='binance-widget-marquee overflow-y-visible w-full'
        data-cmc-ids="1,1027,5426,1839,52,3408,5805,74,3890,7083"
        data-theme="light"
        data-transparent="true"
        data-locale="en"
        data-powered-by="Powered by"
        data-disclaimer="Disclaimer">
      </div>
        <div></div>
    </section>
  )
}

export default BinanceWidget
