import { combineReducers} from 'redux';
import reducerQuestions from '../reducers/reducerQuestions';
/* import reducerRanking from ''; */

const rootReducer = combineReducers({
  reducerQuestions,
  /* reducerRanking, */
});

export default rootReducer;