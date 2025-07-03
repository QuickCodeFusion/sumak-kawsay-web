import { ButtonUI } from './ui/button'
import ProgressBar from './ProgressBar'
import TwoIcons from './TwoIcons'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from './ui/card'

interface Project {
  title: string
  description: string
  image: string
  link: string
  progress: number
}

const CardProject: React.FC<{ project: Project }> = ({ project }): JSX.Element => {
  return (
        <Card className=' flex flex-col justify-between p-4 drop-shadow-md'>
            <CardContent className='flex flex-col gap-4 justify-center items-center'>
                <Image className='aspect-video' src={project.image} alt={project.image} height={900} width={1600}/>
                <h2>{project.title}</h2>
                <ProgressBar progress={project.progress}/>
                <p className='text-start'>{project.description}</p>
            </CardContent>
            <CardFooter className='flex flex-row justify-between items-center w-full gap-4'>
                <ButtonUI asChild variant={'outline'}>
                    <Link href='https://dao.hypha.earth/abya-yala/' target='_blank'>
                        Vote
                    </Link>
                </ButtonUI>
                <TwoIcons/>
            </CardFooter>
        </Card>
  )
}

export default CardProject
