import { createSlice } from '@reduxjs/toolkit'

export const myAccountSlice = createSlice({
  name: 'myAccount',
  initialState: {
    default: ''
  },
  reducers: {
    changeInputFunc: (state, action) => {
      state[action.payload.keyName] = action.payload.value
    },
    resetInputFunc: (state, action) => {
      state[action.payload] = ''
    },
    resetMyAccountFunc: (state, action) => {
      return {
        default: ''
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  changeInputFunc,
  resetInputFunc,
  resetMyAccountFunc
 } = myAccountSlice.actions

export default myAccountSlice.reducer    
