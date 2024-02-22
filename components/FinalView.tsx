import ClaimSteps from './ClaimSteps'
import Footer from './Footer'
import InfoPresale from './InfoPresale'
import BgVideo from './BgVideo'
const FinalView = (): React.JSX.Element => {
  return (
        <main className='flex flex-col gap-4 pt-8 justify-center w-screen'>
            <div></div>
            <BgVideo></BgVideo>
            <section className='p-4'>
                  <div className='flex lg:flex-row flex-col gap-4 justify-around w-full'>
                  <InfoPresale></InfoPresale>
                  <ClaimSteps/>
                  </div>
            </section>
            <Footer/>
        </main>
  )
}

export default FinalView
