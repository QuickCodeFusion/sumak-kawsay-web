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
    title: 'SMART HABITATS',
    content: 'Smart Habitats are at the heart of the Sumak Kawsay ecosystem, representing a revolutionary approach to living spaces. These habitats are designed to be fully sustainable, integrating the latest in green technology and traditional ecological knowledge.',
    id: '1'
  },
  {
    title: 'Value Chains',
    content: 'Our value chains are designed to embody sovereignty and collective growth, fostering shared prosperity. They seamlessly integrate sustainable practices with global market dynamics, ensuring that each step from production to consumption upholds our commitment to local empowerment, environmental stewardship, and equitable economic progress.',
    id: '2'
  },
  {
    title: 'GLOBAL PASSPORT',
    content: 'The passport initiative prioritizes the safety and well-being of its holders, especially in times of geopolitical unrest, enabling swift action for rescue and relocation to safer environments within the ecosystem’s network. It facilitates mobility and access to ecosystem resources, fostering a sense of belonging and security among members.',
    id: '3'
  },
  {
    title: 'Tokenization and Financial Integration',
    content: 'Our platform will utilize a sophisticated tokenization system to represent real-world assets, services, resources and values. This integration will provide a seamless transition for users from traditional financial systems to a more inclusive, blockchain and AI based economy',
    id: '4'
  },
  {
    title: 'Multi-token architecture',
    content: 'Innovative multi-token framework for a new era of digital economy and community engagement.',
    id: '5'
  },
  {
    title: 'Dividends',
    content: 'Holders of our tokens receive dividends that are a direct result of the ecosystem is success and growth, aligning individual financial wellbeing with the collective advancement of our community.',
    id: '6'
  },
  {
    title: 'GLOBAL MARKETPLACE',
    content: 'The Global Marketplace is a dynamic platform designed to harness the collective skills, talents, professions, financial resources, lands, projects, products, services, and initiatives of our ecosystem members to build a self-reliant community, empowering members to break free from traditional systems that perpetuate dependency and inequality.',
    id: '7'
  },
  {
    title: 'Biosphere 3.0 Smart Holonic Navigation',
    content: 'From ground-level community initiatives to high-level ecological impact data, all enhanced with holonic navigation, the immersive quality of Augmented Reality (AR) and the intelligent curation of Artificial Intelligence (AI.) For seamless Integration of Reality and Virtuality in all their realms.',
    id: '8'
  },
  {
    title: 'GAIA AI ',
    content: 'Its advanced algorithms and deep learning capabilities ensure that our actions are always informed, impactful, and in tune with the needs of our planet.',
    id: '9'
  }
]

const InfoContent = (): React.JSX.Element => {
  return (
    <Element name='faq' className='w-full flex justify-center'>
      <Card className='border-none z-10 w-10/12 bg-amber-700/50  backdrop-filter backdrop-blur-lg'>
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
