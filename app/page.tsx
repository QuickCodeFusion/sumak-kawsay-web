'use client'
import dynamic from 'next/dynamic'

import ClaimSteps from '@/components/ClaimSteps'
import BinanceWidget from '../components/BinanceWidget'
import InfoPresale from '@/components/InfoPresale'
import InfoContent from '@/components/InfoConten'
import { Ecosystem } from '@/components/Ecosystem'
import ItemCarousel from '@/components/ItemCarousel'
import { InfoCard } from '@/components/InfonCard'
import { Passport } from '@/components/Passport'
import CardTeamWorkList from '@/components/CardTeamWorkList'
import { Roadmap } from '@/components/Roadmap'
import { Tokenomics } from '@/components/Tokenomics'
import { Dividends } from '@/components/Dividends'
import { Fractional } from '@/components/Fractional'
import { Marketplace } from '@/components/Marketplace'

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

const currentDate = new Date()
const stopRenderingDate = new Date('2024-04-01')

const shouldRenderProgressBar = currentDate < stopRenderingDate

const Home = (): React.JSX.Element => {
  return (
        <main className='flex flex-col gap-20 pt-8 mt-10 px-8 justify-center items-center w-screen'>
            <section className='p-2 my-10 z-10 w-full'>
                  <div className='flex md:grid grid-cols-2 lg:flex-row flex-col gap-4 justify-around w-full'>
                      <InfoPresale/>
                      {!shouldRenderProgressBar && <ClaimSteps/>}
                      {shouldRenderProgressBar && <section className='bg-background/50 border rounded-3xl py-4 flex flex-col md:w-3/4 mx-0'>
                        <PresaleCountdown/>
                        <InfoPhase/>
                        <BuyInfo/>
                        {/* <ButtonUI className='w-fit self-end bg-transparent border-b'>How to buy guide</ButtonUI> */}
                      </section>}
                  </div>
            </section>
            <BinanceWidget/>
            <InfoCard/>
            <ItemCarousel/>
            <Ecosystem/>
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
