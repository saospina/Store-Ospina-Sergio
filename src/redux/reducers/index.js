import { combineReducers } from 'redux'
import ContentReducer from './ContentReducer';
import UserReducer from './UserReducer';
import RedeemReducer from './RedeemReducer';
import HistoryReducer from './HistoryReducer';

const rootReducer = combineReducers({
  ContentReducer,
  UserReducer,
  RedeemReducer,
  HistoryReducer
});

export default rootReducer;