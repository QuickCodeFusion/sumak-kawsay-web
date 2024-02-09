import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { currentPriceSlice } from './feature/currentPriceSlice'
import { balanceOfSlice } from './feature/balanceOfSlice'

export const store = configureStore({
  reducer: {
    currentPrice: currentPriceSlice.reducer,
    balanceOf: balanceOfSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(

    )
})

setupListeners(store.dispatch)
