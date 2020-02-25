import {combineReducers} from 'redux';
import booksReducer from './books.js';

const rootReducer = combineReducers({
  booksReducer,
});

export default rootReducer;