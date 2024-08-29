import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    departure: '',
    destination: '',
    holidaySort: '',
    noOfPeople: 0,
    date: {
      startDate: '',
      endDate: ''
    }
  },
  reducers: {
    departureFunc: (state, action) => {
      state.departure = action.payload
    },
    destinationFunc: (state, action) => {
      state.destination = action.payload
    },
    holidaysSortFunc: (state, action) => {
      state.holidaySort = action.payload
    },
    noOfPeopleFunc: (state, action) => {
      state.noOfPeople = action.payload
    },
    dateFunc: (state, action) => {
      state.date.startDate = action.payload.startDate
      state.date.endDate = action.payload.endDate
    },
    dateResetFunc: (state, action) => {
      state.date.startDate = ''
      state.date.endDate = ''
    },
    resetHomeFunc: (state, action) => {
      state = {
        departure: '',
        destination: '',
        holidaySort: '',
        noOfPeople: 0,
        date: {
          startDate: '',
          endDate: ''
        }
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  departureFunc, 
  destinationFunc,
  holidaysSortFunc,
  noOfPeopleFunc,
  dateFunc,
  dateResetFunc,
  resetHomeFunc
 } = homeSlice.actions

export default homeSlice.reducer