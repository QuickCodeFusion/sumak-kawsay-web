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
    <section className='relative w-full'>

      <div className='binance-widget-marquee overflow-y-visible w-full'
        data-cmc-ids="1,1027,5426,1839,52,3408,5805,74,3890,7083"
        data-theme="light"
        data-transparent="true"
        data-locale="en"
        data-powered-by="Powered by"
        data-disclaimer="Disclaimer">
      </div>
        <div></div>
        <Image className='absolute top-full left-0 scale-150' src={'/fondofooter.png'} alt='fondo indigena' height={500} width={2000}></Image>
    </section>
  )
}

export default BinanceWidget
