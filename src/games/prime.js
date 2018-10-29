import game from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let counter = 2; counter <= Math.floor(Math.sqrt(num + 1)); counter += 1) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const number = getRandomNum(10, 70);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => game(gameData, description);
