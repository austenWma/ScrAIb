import { combineReducers } from 'redux';
import ScrAIbReducer from './scraibReducers.js';

const combinedReducers = combineReducers({
  reducers: ScrAIbReducer
})

export default combinedReducers;