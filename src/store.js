import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import homeReducer from './reducers/homeSlice';
import myAccountReducer from './reducers/myAccountSlice';

const loggerMiddleware = createLogger();

export default configureStore({
  reducer: {
    home: homeReducer,
    myAccount: myAccountReducer
  }
})




