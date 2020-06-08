import requestApiTrivia from '../Fetchrequest/Fetch-api-trivia';

export const GET_TOKEN = 'Get token from api';
export const REQUEST_API = 'Request Api';

const getToken = (token) => ({
  type: GET_TOKEN,
  token,
})

const requestApi = () => ({
  type: REQUEST_API,
  });

export function getTokenUser() {
  return (dispatch) => {
    dispatch(requestApi()); 

    return requestApiTrivia()
      .then(data => dispatch(getToken(data)))
  }
}

