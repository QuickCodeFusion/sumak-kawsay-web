import { Element } from 'react-scroll'
import { Card } from './ui/card'
import { Timeline, TimelineDate, TimelineItem, TimelineTitle } from './ui/timeline'

export const Roadmap = (): React.JSX.Element => {
  const timelineItems = [
    {
      title: 'Phase 1: Establish the core structure and community foundation of the Sumak Kawsay Ecosystem.',
      content: `Establish digital and physical infrastructure.
      Launch the multi-token system and legal frameworks.
      Host first community Summits, Festivals and Gatherings.
      Build the first international holistic retreat sanctuary.`,
      date: '(Year 1 - 2)'
    },
    {
      title: 'Phase 2: Broaden our reach and improve our technological framework.',
      content: `Expand the Ecosystem land network and integrate indigenous and private reserves.
      Advance blockchain and AI integration for enhanced resource management.
      Open the Ecosystem Marketplace for wider product and service access.`,
      date: '(Years 2-3)'
    },
    {
      title: 'Phase 3: Global Network and Political Influence',
      content: `Establishing a global network and gain political recognition.
      Implement a value-backed currency system and universal passport initiative.
      Form strategic alliances for broader global collaboration.`,
      date: '(Years 3-4)'
    },
    {
      title: 'Phase 4: Sustainability and Autonomy. Achieving ecosystem self-sufficiency and independence.',
      content: 'Attain full functionality. Secure global political approval and expand community reach.',
      date: '(Years 4-5)'
    },
    {
      title: 'Phase 5:  Pushing the boundaries in ecological conservation and global influence.',
      content: 'Influence global sustainability policies. Expand and implement regenerative practices on a larger scale. Showcase the global environmental and social impact of the ecosystem',
      date: '(Years 5-6)'
    }
  ]
  return (

    <Element name='roadMap' className='p-4 py-20 text-center flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Journey Through Time: Our Roadmap</h1>
      <p className='my-4 text-lg'>Explore the milestones that mark our shared path towards transformation.</p>
         <Card className='mx-2 md:w-2/3 pr-6 text-start bg-background/50 border shadow-sm'>
      <Timeline>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineDate>{item.date}</TimelineDate>
            <p>{item.content}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
    </Element>
  )
}
