import { combineReducers } from 'redux';
import tokenAndQuestions from '../reducers/r_tokenAndQuestions';
import { timer } from '../reducers/r_timer';

const rootReducers = combineReducers({
  tokenAndQuestions,
  timer,
});

export default rootReducers;
