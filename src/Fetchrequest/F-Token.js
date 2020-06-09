const token = '326640d75650654a59f5b979e4ac2aa70fdcf2145a8ae91ee1fb791960163073';

const questionTrivia = () => (
  fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)
      )))
);

export default questionTrivia;
