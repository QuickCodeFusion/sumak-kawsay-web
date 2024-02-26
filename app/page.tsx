'use client'
import dynamic from 'next/dynamic'

import ClaimSteps from '@/components/ClaimSteps'
import Footer from '@/components/Footer'
import InfoPresale from '@/components/InfoPresale'
import BgVideo from '@/components/BgVideo'
import InfoContent from '@/components/InfoConten'
import { Card } from '@/components/ui/card'
import { InfoItemsList } from '@/components/InfoItemsList'
import ItemCarousel from '@/components/ItemCarousel'

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
        <main className='flex flex-col gap-20 pt-8 justify-center items-center w-screen -z-10'>
            <BgVideo></BgVideo>
            <section className='p-4 z-10 mb-10'>
                  <div className='flex lg:flex-row flex-col gap-4 justify-around w-full'>
                    <InfoPresale/>
                    {!shouldRenderProgressBar && <ClaimSteps/>}
                    {shouldRenderProgressBar && <section className='backdrop-blur bg-black/50 rounded-3xl p-4 flex flex-col w-full lg:w-1/2 mx-0 '>
                      <PresaleCountdown/>
                      <InfoPhase/>
                      <BuyInfo/>
                    </section>}
                  </div>
            </section>
            <ItemCarousel/>
            <InfoItemsList/>
            <Card className='border-none z-10 w-10/12 bg-amber-700/50  backdrop-filter backdrop-blur-lg'>
                  <InfoContent></InfoContent>
            </Card>
            <Footer/>
        </main>
  )
}

export default Home
