'use client'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'

const ReduxProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}

export default ReduxProvider
