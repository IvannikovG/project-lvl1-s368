import game from '..';

const description = 'Answer "yes" if number is even, otherwise answer "no".';
const isEven = number => (number % 2 === 0);

const gameData = () => {
  const question = Math.floor(Math.random() * 1000) + 1;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => game(gameData, description);
