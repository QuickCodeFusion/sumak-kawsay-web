import { ButtonUI } from './ui/button'
import ProgressBar from './ProgressBar'
import TwoIcons from './TwoIcons'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  image: string
  link: string
  progress: number
}

const CardProject: React.FC<{ project: Project }> = ({ project }): JSX.Element => {
  return (
        <div className=' drop-shadow-md flex flex-col bg-card justify-between aspect-square items-center  gap-8 p-12 rounded-3xl'>
            <div className='flex flex-col items-center gap-10'>
                <Image src={project.image} className='object-cover aspect-video rounded-md' alt={project.title} width={1600} height={900}></Image>
                <h1 className=' flex items-center'>{project.title}</h1>
            </div>
                <ProgressBar className='text-white' progress={project.progress}></ProgressBar>
            <div className='relative w-full'>
                <p className='text-start absolute -top-6 left-12'>{project.description}</p>
            </div>
            <div className='flex flex-row justify-between items-center w-full gap-4'>
                <ButtonUI asChild variant={'outline'}>
                    <Link href='https://dao.hypha.earth/abya-yala/' target='_blank'>
                        Vote
                    </Link>
                </ButtonUI>
                <TwoIcons/>
            </div>
        </div>
  )
}

export default CardProject
