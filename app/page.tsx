import BuyInfo from '@/components/BuyInfo'
import PresaleCountdown from '@/components/PresaleCountdown'
import { TimeData } from '@/components/TimeData'
import { ButtonUI } from '@/components/ui/button'
import Link from 'next/link'

const Home = (): React.JSX.Element => {
  return (
    <main className='flex flex-col md:flex-row gap-4 pt-8 justify-center w-screen'>
      <section>
        <div className='flex flex-col text-center text-white justify-center gap-10 md:gap-16 items-center my-12'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Unified Decentralized Platform
          </h1>
          <p className='text-md md:text-lg font-semibold'>Buy tokens now and reap the benefits of the blockchain revolution!</p>
          <ButtonUI asChild className='rounded-full capitalize'>
            <Link href='/whitepaper.pdf' target='_blank'>
              Read the whitepaper
            </Link>
          </ButtonUI>
        </div>
      </section>
      <section className='backdrop-blur bg-black/50 border rounded p-4 flex flex-col w-full md:w-1/2 mx-0 md:mx-12'>
        <PresaleCountdown/>
        <TimeData stage={1} progress={2000} goal={10000}/>
        <BuyInfo/>
      </section>
    </main>
  )
}

export default Home
