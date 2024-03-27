import { LanguageProvider } from './languageProvider'
import RainbowKitApp from './rainbowKitApp'
import ReduxProvider from './reduxProvider'
import { Toaster } from '@/components/ui/sonner'

export const Providers = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
        <RainbowKitApp>
            <ReduxProvider>
              <LanguageProvider>
                <Toaster position="top-center"/>
                {children}
              </LanguageProvider>
            </ReduxProvider>
        </RainbowKitApp>
  )
}
