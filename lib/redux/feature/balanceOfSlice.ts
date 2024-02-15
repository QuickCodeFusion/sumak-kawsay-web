import { createSlice } from '@reduxjs/toolkit'

export const balanceOfSlice = createSlice({
  name: 'balanceOf',
  initialState: {
    balanceOf: null
  },
  reducers: {
    setBalanceOf: (state, action) => {
      state.balanceOf = action.payload
    }
  }
})

export const { setBalanceOf } = balanceOfSlice.actions
