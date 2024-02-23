import PreView from '@/components/PreView'
import FinalView from '@/components/FinalView'

const currentDate = new Date()
const stopRenderingDate = new Date('2024-04-01')

const shouldRenderComponents = currentDate > stopRenderingDate

const Home = (): React.JSX.Element => {
  return (
      <>
        {
          shouldRenderComponents
            ? <PreView/>
            : <FinalView/>
        }
      </>
  )
}

export default Home
