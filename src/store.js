import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import homeReducer from './reducers/homeSlice';

const loggerMiddleware = createLogger();

export default configureStore({
  reducer: {
    home: homeReducer
  }
})




