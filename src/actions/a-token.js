import requestTokenAPI from '../service/tokenAPI';
import requestQuestionsAPI from '../service/QuestionsAPI';

export const REQUEST_API = 'REQUEST_API';
export const GET_TOKEN = 'GET_TOKEN_FROM_API';
export const GET_QUESTIONS = 'GET_ARRAY_RESULTS';

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getResults = ({ results }) => ({
  type: GET_QUESTIONS,
  data: results,
});

const requestApi = () => ({
  type: REQUEST_API,
});

export function getTokenUser() {
  return (dispatch) => {
    dispatch(requestApi());

    return requestTokenAPI()
      .then((data) => dispatch(getToken(data.token)));
  };
}

export function getResultsQuestions() {
  return (dispatch) => {
    dispatch(getToken());

    return requestQuestionsAPI()
      .then((data) => dispatch(getResults(data)));
  };
}
