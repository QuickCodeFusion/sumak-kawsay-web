import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Card } from './ui/card'
import { Element } from 'react-scroll'

const Item = [
  {
    title: 'What is the Sumak Kawsay Ecosystem?',
    content: 'Sumak Kawsay is a holistic ecosystem that merges advanced technology with ecological wisdom and social regeneration. It aims to create sustainable, interconnected communities by leveraging blockchain and AI technologies, promoting regenerative practices, and fostering global collaboration.',
    id: '1'
  },
  {
    title: 'How does the ICO contribute to global sustainability?',
    content: 'The ICO funds will drive the creation of a decentralized ecosystem focusing on regenerative practices, equitable resource management, and integrating ancestral wisdom with modern technology, fostering a sustainable global community.',
    id: '2'
  },
  {
    title: 'What are the benefits of investing in the Sumak Kawsay ICO?',
    content: 'Token holders enjoy financial benefits such as value appreciation and revenue sharing, community and ecosystem participation rights, and ecological and social impacts through sustainable project contributions. They also get access to exclusive platforms, events, and opportunities to contribute to community development initiatives.',
    id: '3'
  },
  {
    title: 'What makes Sumak Kawsay different from other ICOs?',
    content: "Unlike typical ICOs, Sumak Kawsay is rooted in ecological and social regeneration, merging cutting-edge technology with ancient wisdom. It's an investment in a sustainable future, prioritizing shared prosperity and environmental stewardship.",
    id: '4'
  },
  {
    title: 'How does the Universal Passport work?',
    content: 'The Universal Passport provides legal recognition and status to ecosystem token holders, facilitating seamless access to shared assets and services, ensuring security in times of global crisis, and fostering a sense of global citizenship and unity.',
    id: '5'
  },
  {
    title: 'Shambhala Bio-habitats, and how can I get involved?',
    content: 'Bio-Towns are sustainable living models within the ecosystem, offering various lifestyle preferences and productive systems. Participants can engage through investment, residency, or contributing to the development and growth of these eco-friendly communities.',
    id: '6'
  },
  {
    title: 'How does Sumak Kawsay ensure community engagement and governance?',
    content: 'The ecosystem employs decentralized governance models, allowing token holders to vote on key decisions and participate in community programs. This ensures a transparent decision-making process and fosters a sense of ownership and involvement among community members',
    id: '7'
  },
  {
    title: 'What is the role of technology in the ecosystem?',
    content: 'echnology, particularly blockchain and AI, underpins the ecosystem, ensuring transparency, security, and efficiency. It supports sustainable resource management, ecological balance, and facilitates community engagement and education.',
    id: '8'
  },
  {
    title: 'How will the funds from the ICO be used?',
    content: "Funds will be allocated towards technological development, community engagement, operational costs, legal compliance, and sustainable initiatives, ensuring the ecosystem's growth and impact.",
    id: '9'
  },
  {
    title: 'How can I join the ICO presale for Sumak Kawsay?',
    content: "You have two options: The Official Presale on Unifying.earth: Accessible by using a blockchain wallet or card at unifying.earth. The 12 Moons Presale: Ideal for late adopters who resonate with our mission but didn't participate in the official presale.",
    id: '10'
  },
  {
    title: 'What are the risks and how are they mitigated?',
    content: 'While all investments carry risk, Sumak Kawsay is committed to transparency, legal compliance, and implementing strategic risk mitigation. We provide clear communication and adhere to international standards, ensuring a secure investment environment.',
    id: '11'
  },
  {
    title: 'What is the long-term vision for the Sumak Kawsay Ecosystem?',
    content: 'To create a harmonious and abundant world where technology, humanity, and nature thrive together, fostering ecological balance and social regeneration.',
    id: '12'
  }
]

const InfoContent = (): React.JSX.Element => {
  return (
    <Element name='faq' className='w-full flex md:flex-col items-center py-20 flex-wrap justify-center'>
      <h1 className='text-3xl font-bold text-center mb-5'>Frequently Asked Questions</h1>
      <Card className='z-10 w-10/12 bg-background/50 border shadow-sm backdrop-filter backdrop-blur-lg'>
        <Accordion type="single" collapsible className="p-4">
          {Item.map((item, index) => (
            <AccordionItem key={index} value={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.content}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </Element>
  )
}

export default InfoContent
