import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const greetUser = () => {
  const name = readlineSync.question('May I have your name? ') || null;
  console.log(`Hello, ${name}!`);
  return name;
};

export const askToAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};
