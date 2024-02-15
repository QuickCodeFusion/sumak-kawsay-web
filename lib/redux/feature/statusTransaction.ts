import { createSlice } from '@reduxjs/toolkit'

export const statusTransaction = createSlice({
  name: 'statusTransaction',
  initialState: {
    statusTransaction: undefined
  },
  reducers: {
    setStatusTransaction: (state, action) => {
      state.statusTransaction = action.payload
    }
  }
})

export const { setStatusTransaction } = statusTransaction.actions
