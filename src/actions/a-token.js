import requestTokenAPI from '../service/tokenAPI';
import requestQuestionsAPI from '../service/QuestionsAPI';

export const REQUEST_API = 'REQUEST_API';
export const GET_TOKEN = 'GET_TOKEN_FROM_API';
export const GET_QUESTIONS = 'GET_ARRAY_RESULTS';
export const GET_NAME_EMAIL ='GET_NAME_EMAIL_USER'

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getResults = (data) => ({
  type: GET_QUESTIONS,
  data,
});

export const getNameEmail = (name, email) => ({
  type: GET_NAME_EMAIL,
  name,
  email,
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
      .then((data) => dispatch(getResults(data.results)));
  };
}
