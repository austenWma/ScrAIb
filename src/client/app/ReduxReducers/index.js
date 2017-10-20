import { combineReducers } from 'redux';
import { UserID } from './scraibReducers/UserID.js';
import { Records } from './scraibReducers/Records.js';

const combinedReducers = combineReducers({
  UserID,
  Records
})

export default combinedReducers;