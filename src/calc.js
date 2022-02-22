import { askToAnswer, greetUser } from './cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const calc = (a, b, operand = '+') => {
  if (operand === '+') {
    return a + b;
  }
  if (operand === '-') {
    return a - b;
  }
  if (operand === '*') {
    return a * b;
  }

  return a + b;
};

export default () => {
  const name = greetUser();
  console.log('What is the result of the expression?');
  let score = 0;

  const operations = ['+', '-', '*'];

  while (score < 3) {
    const numA = getRandomInt(100);
    const numB = getRandomInt(100);
    const operand = operations[getRandomInt(3)];
    const expression = `${numA} ${operand} ${numB}`;
    const trueAnswer = calc(numA, numB, operand);

    const answer = askToAnswer(expression);

    if (Number(answer) === trueAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
