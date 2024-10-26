import Image from 'next/image'
import { ButtonUI } from './ui/button'
import ProgressBar from './ProgressBar'
import TwoIcons from './TwoIcons'

interface Project {
  title: string
  description: string
  image: string
  link: string
  progress: number
}

const CardProject: React.FC<{ project: Project }> = ({ project }): JSX.Element => {
  return (
        <div className='flex flex-col bg-card justify-center items-center gap-8 p-6 rounded-3xl'>
            <div className='flex flex-row  gap-10'>
                <Image src="/logo.png" alt="logo" width={70} height={70}></Image>
                <h1 className=' flex items-center'>{project.title}</h1>
            </div>
            <div>
                <p>{project.description}</p>
            </div>
                <ProgressBar progress={project.progress}></ProgressBar>
            <div className='flex flex-row justify-between items-center w-full gap-4'>
                <ButtonUI variant={'outline'}>Uplift</ButtonUI>
                <TwoIcons/>
            </div>
        </div>
  )
}

export default CardProject
