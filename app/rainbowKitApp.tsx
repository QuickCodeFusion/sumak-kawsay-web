'use client'
import '@rainbow-me/rainbowkit/styles.css'
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {
  bscTestnet, sepolia
} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [bscTestnet, sepolia],
  [
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: '8fad1b957ecb3a89503a3b6536841aeb',
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const RainbowKitApp = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider showRecentTransactions={true} chains={chains} theme={darkTheme({
              accentColor: '#6b7280',
              accentColorForeground: 'white',
              borderRadius: 'large',
              fontStack: 'system',
              overlayBlur: 'none'
            })}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
  )
}

export default RainbowKitApp
