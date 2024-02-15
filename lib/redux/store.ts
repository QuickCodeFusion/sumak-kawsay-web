import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { currentPriceSlice } from './feature/currentPriceSlice'
import { balanceOfSlice } from './feature/balanceOfSlice'
import { waitTransaction } from './feature/waitTransaction'
import { statusTransaction } from './feature/statusTransaction'

export const store = configureStore({
  reducer: {
    currentPrice: currentPriceSlice.reducer,
    balanceOf: balanceOfSlice.reducer,
    waitTransaction: waitTransaction.reducer,
    statusTransaction: statusTransaction.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(

    )
})

setupListeners(store.dispatch)
