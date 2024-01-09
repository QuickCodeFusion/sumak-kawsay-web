import RainbowKitApp from './rainbowKitApp'

export const Providers = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
        <RainbowKitApp>
            {children}
        </RainbowKitApp>
  )
}
