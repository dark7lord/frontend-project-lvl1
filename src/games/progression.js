import { getRandomInt, playGame } from '../index.js';

const generateList = () => {
  const x = getRandomInt(50);
  const y = 5 + getRandomInt(10);
  const step = 1 + getRandomInt(10);
  const arr = [];

  for (let i = 0; i < y; i += 1) {
    arr.push(x + (i * step));
  }

  return arr;
};

export default () => {
  const getData = () => {
    const arr = generateList();
    const indexTrueAnswer = getRandomInt(arr.length);
    const trueAnswer = arr[indexTrueAnswer];
    arr[indexTrueAnswer] = '..';

    return [
      arr,
      trueAnswer,
    ];
  };

  const instruction = 'What number is missing in the progression?';

  const getPattern = ([arr]) => arr.join(' ');

  const getTrueAnswer = ([, trueAnswer]) => trueAnswer;

  playGame(instruction, getData, getPattern, getTrueAnswer);
};
