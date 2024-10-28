import CardProject from './CardProject'

const Projects = (): JSX.Element => {
  const projects = [
    {
      id: '1',
      title: 'Regenerative Tourism',
      description: '0/94,752 UNITY',
      progress: 50,
      image: '/tourism.jpg',
      link: '/'
    },
    {
      id: '2',
      title: 'Bioeconomy',
      description: '0/87,074 UNITY',
      progress: 35,
      image: '/bioeconomy.jpg',
      link: '/'
    },
    {
      id: '3',
      title: 'Agri-food Value Chains',
      description: '0/532,399 UNITY',
      progress: 75,
      image: '/agrifood.jpg',
      link: '/'
    }
  ]
  return (
        <div className='flex flex-col md:grid grid-cols-3 gap-4'>
            {
                projects.map((project) => (
                    <CardProject key={project.id} project={project} />
                ))
            }
        </div>
  )
}

export default Projects
