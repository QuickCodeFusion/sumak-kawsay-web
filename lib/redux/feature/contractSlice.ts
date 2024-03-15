import { createSlice } from '@reduxjs/toolkit'

export const contractSlice = createSlice({
  name: 'contract',
  initialState: {
    contract: '0x248f2b2Ca86Dc1033be2Df56E5481f4f8BBE8c89'
  },
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload
    }
  }
})

export const { setContract } = contractSlice.actions
