import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from './themeDark'
import Footer from '@/components/Footer'
import BgVideo from '@/components/BgVideo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UNITY Official Presale',
  description: 'Unlock the Renaissance of Prosperity with Sumak Kawsay. Join us in co-creating a world of harmony and abundance. Experience a transformative journey that starts within and resonates globally. Embrace a new era of well-being and prosperity today.'
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): React.JSX.Element => {
  return (
    <html lang="en">
      <body className={
        cn(
          'min-h-screen',
          inter.className,
          ' bg-[url(/345.jpeg)] bg-cover bg-no-repeat bg-center bg-fixed',
          'h-screen flex'
        )
      }>
        <Providers>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Navbar/>
            {children}
            <Footer/>
            <BgVideo/>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
