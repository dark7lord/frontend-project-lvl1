import { getRandomInt, playGame } from '../index.js';

export default () => {
  const operations = ['+', '-', '*'];

  const getData = () => [
    getRandomInt(100),
    operations[getRandomInt(operations.length)],
    getRandomInt(100),
  ];

  const instruction = 'What is the result of the expression?';

  const getPattern = ([numA, operand, numB]) => `${numA} ${operand} ${numB}`;

  const getTrueAnswer = ([numA, operand, numB]) => {
    if (operand === '+') {
      return numA + numB;
    }
    if (operand === '-') {
      return numA - numB;
    }
    if (operand === '*') {
      return numA * numB;
    }

    return 'no such operand';
  };

  playGame(instruction, getData, getPattern, getTrueAnswer);
};
