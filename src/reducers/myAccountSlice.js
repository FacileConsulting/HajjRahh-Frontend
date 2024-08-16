import { createSlice } from '@reduxjs/toolkit'

export const myAccountSlice = createSlice({
  name: 'myAccount',
  initialState: {
    default: ''
  },
  reducers: {
    changeInputFunc: (state, action) => {
      // console.log(action.payload)
      state[action.payload.keyName] = action.payload.value
    },
    resetInputFunc: (state, action) => {
      state[action.payload] = ''
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  changeInputFunc,
  resetInputFunc
 } = myAccountSlice.actions

export default myAccountSlice.reducer    
