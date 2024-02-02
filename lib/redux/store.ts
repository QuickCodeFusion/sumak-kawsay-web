import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { currentPriceSlice } from './feature/currentPriceSlice'

export const store = configureStore({
  reducer: {
    currentPrice: currentPriceSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(

    )
})

setupListeners(store.dispatch)
