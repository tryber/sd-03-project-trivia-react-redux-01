import { GET_TOKEN, REQUEST_API } from '../actions/a-token';

const INITIAL_STATE = {
  token: '',
  isFetching: false,
};

const tokenUser = (state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};

export default tokenUser;
