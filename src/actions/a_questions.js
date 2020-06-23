export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const WRONG_ANSWER = 'WRONG_ANSWER';

export const scoreCorrect = (timer, difficulty) => ({
  type: CORRECT_ANSWER,
  score: timer * difficulty,
});

export const scoreWrong = () => ({
  type: WRONG_ANSWER,
});
