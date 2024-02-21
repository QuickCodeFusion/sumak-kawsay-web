'use client'
import { useEffect } from 'react'

const BinanceWidget = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.9.min.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <div className="binance-widget-marquee w-full"
      data-cmc-ids="1,1027,5426,1839,52,3408,5805,74,3890,7083"
      data-theme="dark"
      data-transparent="false"
      data-locale="en"
      data-powered-by="Powered by"
      data-disclaimer="Disclaimer">
    </div>
  )
}

export default BinanceWidget
