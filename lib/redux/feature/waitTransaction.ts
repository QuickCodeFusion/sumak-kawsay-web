import { createSlice } from '@reduxjs/toolkit'

export const waitTransaction = createSlice({
  name: 'waitTransaction',
  initialState: {
    waitTransaction: undefined
  },
  reducers: {
    setWaitTransaction: (state, action) => {
      state.waitTransaction = action.payload
    }
  }
})

export const { setWaitTransaction } = waitTransaction.actions
