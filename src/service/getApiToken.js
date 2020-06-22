const URL = 'https://opentdb.com/api_token.php?command=request';

function getToken() {
  return fetch(URL)
    .then((response) => response.json()
      .then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json))
      .then((json) => localStorage.setItem('token', json.token)));
}

export default getToken;
