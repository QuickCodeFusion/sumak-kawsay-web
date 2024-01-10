import PresaleCountdown from '@/components/PresaleCountdown'
import { TimeData } from '@/components/TimeData'
import { ButtonModal } from '@/components/ButtonModal'

const Home = (): React.JSX.Element => {
  return (
    <main className='h-5/6 flex gap-4 flex-col justify-center'>
      <PresaleCountdown/>
      <section>
        <div className='flex flex-col text-center text-white justify-center gap-10 md:gap-16 items-center my-12'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            Unified Decentralized Platform
          </h1>
          <p className='text-md md:text-lg font-semibold'>Buy tokens now and reap the benefits of the blockchain revolution!</p>
        </div>
      </section>
      <TimeData stage={1} progress={2000} goal={10000}/>
      <ButtonModal/>
    </main>
  )
}

export default Home
