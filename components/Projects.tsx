import CardProject from './CardProject'

const Projects = (): JSX.Element => {
  const projects = [
    {
      id: '1',
      title: 'Regenerative Tourism',
      description: '0/94,752 AYNI',
      progress: 50,
      image: '/tourism.jpg',
      link: '/'
    },
    {
      id: '2',
      title: 'Bioeconomy',
      description: '0/87,074 AYNI',
      progress: 35,
      image: '/bioeconomy.jpg',
      link: '/'
    },
    {
      id: '3',
      title: 'Agri-food Value Chains',
      description: '0/532,399 AYNI',
      progress: 75,
      image: '/agrifood.jpg',
      link: '/'
    }
  ]
  return (
        <div className='relative flex flex-col md:grid grid-cols-3 gap-4'>
          <div className='absolute hidden md:block -top-1/3 left-1/2 -translate-x-1/2 h-[1px] w-[67.9%] bg-black'></div>
            {
                projects.map((project) => (
                    <CardProject key={project.id} project={project} />
                ))
            }
        </div>
  )
}

export default Projects
