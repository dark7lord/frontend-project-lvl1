import { askToAnswer, greetUser, welcome } from './cli.js';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const playGame = (instruction, getData, getPattern, getTrueAnswer) => {
  welcome();
  const name = greetUser();
  console.log(`${instruction}`);
  let score = 0;

  while (score < 3) {
    const data = getData();
    const expression = getPattern(data);
    const answer = askToAnswer(expression);
    const trueAnswer = getTrueAnswer(data);

    if (answer === `${trueAnswer}`) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
