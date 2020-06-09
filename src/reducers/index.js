import { combineReducers } from 'redux';
import tokenAndQuestions from '../reducers/r_tokenAndQuestions';

const rootReducers = combineReducers({
  tokenAndQuestions,
});

export default rootReducers;
