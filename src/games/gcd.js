import gcd from '../greatCommonDivisor.js';
import { getRandomInt, playGame } from '../index.js';

export default () => {
  const getData = () => [
    getRandomInt(100),
    getRandomInt(100),
  ];

  const instruction = 'Find the greatest common divisor of given numbers.';

  const getPattern = ([x, y]) => `${x} ${y}`;

  const getTrueAnswer = ([x, y]) => gcd(x, y);

  playGame(instruction, getData, getPattern, getTrueAnswer);
};
