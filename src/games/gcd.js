import game from '..';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of the given numbers.';

const gcd = (num1, num2) => {
  const dividend = Math.max(num1, num2);
  const divisor = Math.min(num1, num2);
  const remainder = dividend % divisor;
  if (remainder === 0) {
    return divisor;
  }
  return gcd(divisor, remainder);
};

const gameData = () => {
  const number1 = getRandomNum(50, 100);
  const number2 = getRandomNum(10, 49);

  const finalResult = gcd(number1, number2);

  const question = `${number1} ${number2}`;
  const answer = `${finalResult}`;

  return [question, answer];
};
export default () => game(gameData, description);
