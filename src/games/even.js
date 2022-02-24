import { getRandomInt, playGame } from '../index.js';

export default () => {
  const getData = () => [getRandomInt(100)];
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getPattern = ([num]) => `${num}`;

  const getTrueAnswer = ([num]) => ((num % 2 === 0) ? 'yes' : 'no');

  playGame(instruction, getData, getPattern, getTrueAnswer);
};
