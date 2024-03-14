'use client'
import dynamic from 'next/dynamic'

import ClaimSteps from '@/components/ClaimSteps'
import BinanceWidget from '../components/BinanceWidget'
import InfoPresale from '@/components/InfoPresale'
import InfoContent from '@/components/InfoConten'
// import { Ecosystem } from '@/components/Ecosystem'
import ItemCarousel from '@/components/ItemCarousel'
import { InfoCard } from '@/components/InfonCard'
import { Passport } from '@/components/Passport'
import CardTeamWorkList from '@/components/CardTeamWorkList'
import { Roadmap } from '@/components/Roadmap'
import { Tokenomics } from '@/components/Tokenomics'
import { Dividends } from '@/components/Dividends'
import { Fractional } from '@/components/Fractional'
import { Marketplace } from '@/components/Marketplace'
import { saleEnded } from '@/utils/endSale'

// import PresaleCountdown from '@/components/PresaleCountdown'
// import InfoPhase from '@/components/functionsContract/InfoPhase'
// import BuyInfo from '@/components/BuyInfo'

const PresaleCountdown = dynamic(async () => await import('@/components/PresaleCountdown'), {
  ssr: false
})
const InfoPhase = dynamic(async () => await import('@/components/functionsContract/InfoPhase'), {
  ssr: false
})
const BuyInfo = dynamic(async () => await import('@/components/BuyInfo'), {
  ssr: false
})

// const currentDate = new Date()
// const stopRenderingDate = new Date('2024-04-01')

// const shouldRenderProgressBar = currentDate < stopRenderingDate

const Home = (): React.JSX.Element => {
  const endsale = saleEnded()
  console.log(endsale)
  return (
        <main className='flex flex-col gap-20 pt-8 mt-10 px-8 backdrop--md justify-center items-center w-screen'>
            <section className='p-2 my-10 z-10 w-full '>
                  <div className='flex xl:grid grid-cols-3 flex-col place-items-start items-center gap-4 w-full'>
                      <InfoPresale/>
                      {endsale && <ClaimSteps/>}
                      {!endsale && <section className='bg-background/50 border rounded-3xl md:-ml-20 py-4 flex flex-col mx-0 w-full md:w-[500px] xl:w-11/12'>
                        <PresaleCountdown/>
                        <InfoPhase/>
                        <BuyInfo/>
                      </section>}
                  </div>
            </section>
            <BinanceWidget/>
            <InfoCard/>
            <ItemCarousel/>
            {/* <Ecosystem/> */}
            <Passport/>
            <Dividends/>
            <Fractional/>
            <Marketplace/>
            <Tokenomics/>
            <Roadmap/>
            <CardTeamWorkList />
            <InfoContent/>
        </main>
  )
}

export default Home
