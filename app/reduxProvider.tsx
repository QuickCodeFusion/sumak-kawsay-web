'use client'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'

export function Providers ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
