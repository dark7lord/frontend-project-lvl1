import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default () => {
  const name = readlineSync.question('May I have your name? ') || null;
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;

  while (score < 3) {
    const num = getRandomInt(100);
    const trueAnswer = (num % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

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
