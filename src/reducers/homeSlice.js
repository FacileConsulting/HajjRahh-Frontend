import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    departure: '',
    destination: '',
    noOfPeople: 0
  },
  reducers: {
    departureFunc: (state, action) => {
      state.departure = action.payload
    },
    destinationFunc: (state, action) => {
      state.destination = action.payload
    },
    noOfPeopleFunc: (state, action) => {
      state.noOfPeople = action.payload
    },
    resetHomeReducer: (state, action) => {
      state = {
        departure: '',
        destination: '',
        noOfPeople: 0
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  departureFunc, 
  destinationFunc,
  noOfPeopleFunc,
  resetHomeReducer
 } = homeSlice.actions

export default homeSlice.reducer