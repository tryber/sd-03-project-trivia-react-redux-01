import { REQUEST_API_QUESTION, ERROR, GET_RESULTS } from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  error: '',
};

const reducerQuestions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_QUESTION:
      return {
        ...state,
        isFetching: true,
      };

    case GET_RESULTS:
      return {
        ...state,
        isFetching: false,
        data: [...action.payload],
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducerQuestions;
