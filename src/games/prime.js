import { getRandomInt, playGame } from '../index.js';

export default () => {
  const getData = () => getRandomInt(1000) + 2;

  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getPattern = (num) => `${num}`;

  const getTrueAnswer = (n) => {
    if (n === 2) {
      return 'yes';
    }

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return 'no';
      }
      i += 1;
    }

    return 'yes';
  };

  playGame(instruction, getData, getPattern, getTrueAnswer);
};
