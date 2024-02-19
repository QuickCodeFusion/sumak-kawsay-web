import { createSlice } from '@reduxjs/toolkit'

export const currentPriceSlice = createSlice({
  name: 'currentPrice',
  initialState: {
    currentPrice: 0
  },
  reducers: {
    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload
    }
  }
})

export const { setCurrentPrice } = currentPriceSlice.actions
