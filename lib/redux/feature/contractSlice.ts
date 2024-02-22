import { createSlice } from '@reduxjs/toolkit'

export const contractSlice = createSlice({
  name: 'contract',
  initialState: {
    contract: ''
  },
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload
    }
  }
})

export const { setContract } = contractSlice.actions
