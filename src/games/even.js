import game from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if number is even, otherwise answer "no".';
const isEven = number => (number % 2 === 0);

const gameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => game(gameData, description);
