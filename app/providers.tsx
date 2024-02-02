import RainbowKitApp from './rainbowKitApp'
import ReduxProvider from './reduxProvider'

export const Providers = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
        <RainbowKitApp>
            <ReduxProvider>
            {children}
            </ReduxProvider>
        </RainbowKitApp>
  )
}
