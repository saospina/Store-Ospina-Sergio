import { combineReducers } from 'redux'
import ContentReducer from './ContentReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  ContentReducer,
  UserReducer
});

export default rootReducer;