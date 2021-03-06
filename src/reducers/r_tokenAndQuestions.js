import { GET_TOKEN, REQUEST_API, GET_QUESTIONS, GET_NAME_EMAIL } from '../actions/a-token';

const INITIAL_STATE = {
  data: [],
  name: '',
  email: '',
  token: '',
  isFetching: false,
};

const tokenAndQuestions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
        isFetching: false,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        data: action.data,
      };
    case GET_NAME_EMAIL:
      return {
        ...state,
        name: action.name,
        email: action.email,
      };
    default:
      return state;
  }
};

export default tokenAndQuestions;
