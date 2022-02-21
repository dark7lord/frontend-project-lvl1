import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ') || null;
  console.log(`Hello, ${name}!`);
};
