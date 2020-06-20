// const token = localStorage.getItem('token');

const getQuestions = (token) => (
   fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)
      )))
);

export default getQuestions;
