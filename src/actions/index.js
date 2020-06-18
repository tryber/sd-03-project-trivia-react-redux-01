import getQuestion from '../service/getQuestion';

export const REQUEST_API_QUESTION = 'REQUEST_API_QUESTION';
export const GET_RESULTS = 'GET_RESULTS';
export const ERROR = 'ERROR';

const requestApiQuestions = () => ({
  type: REQUEST_API_QUESTION,
});

const getResult = (data) => ({
  type: GET_RESULTS,
  payload: data.results,
});

const getError = (error) => ({
  type: ERROR,
  error,
});

export function dispatchAction (token){
  return (dispatch) => {
    dispatch(requestApiQuestions());
    return getQuestion(token)
    .then(
      (data) => dispatch(getResult(data)),
      (error) => dispatch(getError(error)),
    );
  };
}

