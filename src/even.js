import { askToAnswer, greetUser } from './cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;

  while (score < 3) {
    const num = getRandomInt(100);
    const trueAnswer = (num % 2 === 0) ? 'yes' : 'no';

    const answer = askToAnswer(num);

    if (answer === trueAnswer) {
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
