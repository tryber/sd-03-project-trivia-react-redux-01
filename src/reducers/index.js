import { combineReducers } from 'redux';
import tokenAndQuestions from '../reducers/r_tokenAndQuestions';
import timer from '../reducers/r_timer';
import placar from '../reducers/r_score';

const rootReducers = combineReducers({
  tokenAndQuestions,
  timer,
  placar,
});

export default rootReducers;
