import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { currentPriceSlice } from './feature/currentPriceSlice'
import { contractSlice } from './feature/contractSlice'
import { waitTransaction } from './feature/waitTransaction'
import { statusTransaction } from './feature/statusTransaction'

export const store = configureStore({
  reducer: {
    currentPrice: currentPriceSlice.reducer,
    contract: contractSlice.reducer,
    waitTransaction: waitTransaction.reducer,
    statusTransaction: statusTransaction.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(

    )
})

setupListeners(store.dispatch)
