import game from '..';

const description = 'Find the greatest common divisor of the given numbers.\n';

const gameData = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 50) + 1;

  const gcd = (num1, num2) => {
    const whatToDivide = Math.max(num1, num2);
    const divisor = Math.min(num1, num2);
    const remainder = whatToDivide % divisor;
    if (remainder === 0) {
      return divisor;
    }
    return gcd(divisor, remainder);
  };
  const finalResult = gcd(number1, number2);

  const question = `${number1}, ${number2}`;
  const answer = `${finalResult}`;

  return [question, answer];
};
export default () => game(gameData, description);
