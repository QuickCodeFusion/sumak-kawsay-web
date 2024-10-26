import CardProject from './CardProject'

const Projects = (): JSX.Element => {
  const projects = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Description 1',
      progress: 50,
      image: '/logo.png',
      link: '/'
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Description 2',
      progress: 35,
      image: '/logo.png',
      link: '/'
    },
    {
      id: '3',
      title: 'Pixel Pix',
      description: 'Description 3',
      progress: 75,
      image: '/logo.png',
      link: '/'
    }
  ]
  return (
        <div className='grid grid-cols-3 gap-4'>
            {
                projects.map((project) => (
                    <CardProject key={project.id} project={project} />
                ))
            }
        </div>
  )
}

export default Projects
