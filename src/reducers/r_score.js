import { CORRECT_ANSWER, WRONG_ANSWER } from '../actions/a_questions';

const INITIAL_STATE = {
  score: 0,
  correct: 0,
};

const placar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return {
        ...state,
        score: action.score,
        correct: action.correct,
      };
    case WRONG_ANSWER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default placar;
