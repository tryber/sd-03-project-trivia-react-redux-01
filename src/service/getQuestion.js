
const tokenQuest = (token) => {
  const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return fetch(URL).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  )
};

export default tokenQuest;
