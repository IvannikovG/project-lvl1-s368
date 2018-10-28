import readlineSync from 'readline-sync';

const game = (gameData, description) => {
  const gameRounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getName}!`);
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, answer] = gameData();
    console.log(`Question: ${question}?`);
    const userAnswer = readlineSync.question('Your answer:');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. The correct answer was '${answer}'.`);
      console.log(`Let's try again, ${getName}!`);
    }
  }
  console.log(`Congratulations, ${getName}! :O`);
};

export default game;
