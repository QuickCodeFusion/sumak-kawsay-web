import Navbar from '@/components/Navbar'
import PresaleCountdown from '@/components/PresaleCountdown'
import { TimeData } from '@/components/TimeData'

const Home = (): React.JSX.Element => {
  return (
    <main>
      <Navbar/>
      <PresaleCountdown/>
      <TimeData/>
    </main>
  )
}

export default Home
