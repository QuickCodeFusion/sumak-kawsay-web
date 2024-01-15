'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const Footer = (): React.JSX.Element => {
  const networks = [
    {
      id: 1,
      title: 'Facebook',
      url: 'https://www.facebook.com/TransformationalFestivals',
      image: '/facebook.png'
    },
    {
      id: 2,
      title: 'Instagram',
      url: 'https://www.instagram.com/transformationalfestivals/?utm_source=qr&igsh=d29iY3Rld3kzc25u',
      image: '/instagram.png'
    },
    {
      id: 3,
      title: 'Binance',
      url: 'https://www.binance.com/es/nft/item/82689062?unverified=1&fbclid=IwAR2yoQgi_fva_e3uw4bT5_UgJxgoq1sbv_fDuDXgO1B2weDMpBE-RXvwrfo',
      image: '/binance.png'
    }
  ]

  const readPDF = (): void => {
    window.open('/whitepaper.pdf', '_blank')
  }

  return (
    <footer className="flex mt-5 p-5 justify-center gap-6">
        {
            networks.map((network) => (
                <Link key={network.id} href={network.url} className="p-4 bg-gray-100 bg-opacity-30 hover:bg-white hover:bg-opacity-70 rounded-full">
                    <Image src={network.image} width={28} height={28} alt={network.title} />
                </Link>
            ))
        }
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className='p-4 bg-gray-100 bg-opacity-30 hover:bg-white hover:bg-opacity-70 rounded-full'>
                <Image src='/expediente.png' alt='whitepaper' width={28} height={28} onClick={readPDF} className='cursor-pointer '/>
              </div>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>whitepaper</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </footer>
  )
}

export default Footer
