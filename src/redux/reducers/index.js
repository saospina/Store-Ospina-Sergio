import { combineReducers } from 'redux'
import ContentReducer from './ContentReducer';
import UserReducer from './UserReducer';
import RedeemReducer from './RedeemReducer';

const rootReducer = combineReducers({
  ContentReducer,
  UserReducer,
  RedeemReducer
});

export default rootReducer;