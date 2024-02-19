import ClaimSteps from './ClaimSteps'

const FinalView = (): React.JSX.Element => {
  return (
        <main className='flex flex-col md:flex-row gap-4 pt-8 justify-center w-screen'>
            <section className='p-4 md:p-0 '>
                  <ClaimSteps/>
            </section>
        </main>
  )
}

export default FinalView
