import requestTokenAPI from '../service/tokenAPI';
import requestQuestionsAPI from '../service/QuestionsAPI';

export const REQUEST_API = 'REQUEST_API';
export const GET_TOKEN = 'GET_TOKEN_FROM_API';
export const GET_QUESTIONS = 'GET_ARRAY_RESULTSwsiodasdjh';
export const GET_NAME_EMAIL = 'GET_NAME_EMAIL_USER';

export const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getResults = ({ results }) => ({
  type: GET_QUESTIONS,
  data: results,
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
      .then((token) => dispatch(getToken(token)));
  };
}

export function getResultsQuestions(token) {
  return (dispatch) => {
    dispatch(getToken(token));

    return requestQuestionsAPI(token)
      .then((data) => dispatch(getResults(data)));
  };
}
