import PresaleCountdown from './PresaleCountdown'
import InfoPhase from './functionsContract/InfoPhase'
import BuyInfo from './BuyInfo'
import InfoPresale from './InfoPresale'

const PreView = (): React.JSX.Element => {
  return (
        <main className='flex flex-col md:flex-row gap-4 pt-8 justify-center w-screen'>
        <section className='md:w-1/2 flex justify-center p-10'>
          <InfoPresale/>
        </section>

          <section className='backdrop-blur bg-black/50 border rounded-3xl p-4 flex flex-col w-full md:w-1/2 mx-0 md:mx-12'>
            <PresaleCountdown/>
            <InfoPhase/>
            <BuyInfo/>
          </section>

      </main>
  )
}

export default PreView
