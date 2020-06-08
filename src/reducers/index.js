import { combineReducers } from 'redux';
import tokenUser from '../reducers/r-fetchtoken'

const rootReducers = combineReducers({
  tokenUser,
});

export default rootReducers;
