import Navbar from '@/components/Navbar'
import { TimeData } from '@/components/TimeData'

const Home = (): React.JSX.Element => {
  return (
    <main>
      <Navbar/>
      <TimeData/>
    </main>
  )
}

export default Home
