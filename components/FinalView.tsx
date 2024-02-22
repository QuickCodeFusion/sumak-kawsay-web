import ClaimSteps from './ClaimSteps'
import Footer from './Footer'
import InfoPresale from './InfoPresale'
import BgVideo from './BgVideo'
import InfoContent from './InfoConten'
import { Card } from './ui/card'
import { InfoItemsList } from './InfoItemsList'
const FinalView = (): React.JSX.Element => {
  return (
        <main className='flex flex-col gap-4 pt-8 justify-center items-center w-screen bg-slate-300 -z-10'>
            <BgVideo></BgVideo>
            <section className='p-4 z-10'>
                  <div className='flex lg:flex-row flex-col gap-4 justify-around w-full'>
                  <InfoPresale></InfoPresale>
                  <ClaimSteps/>
                  </div>
            </section>
            <InfoItemsList/>
            <Card className='border-none z-10 w-10/12 bg-amber-700/50  backdrop-filter backdrop-blur-lg'>
                  <InfoContent></InfoContent>
            </Card>
            <Footer/>
        </main>
  )
}

export default FinalView
