import requestApiTrivia from '../Fetchrequest/Fetch-api-trivia';

export const REQUEST_API = 'REQUEST_API';
export const GET_TOKEN = 'GET_TOKEN_FROM_API';

const getToken = (token) => ({
  type: GET_TOKEN,
  token,
});

const requestApi = () => ({
  type: REQUEST_API,
});

export function getTokenUser() {
  return (dispatch) => {
    dispatch(requestApi());

    return requestApiTrivia()
      .then((data) => dispatch(getToken(data)));
  };
}
