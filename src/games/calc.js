import game from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const gameData = () => {
  const pseudoRandomNumber = getRandomNum(1, 3);

  let question;
  let answer;

  const maximum = getRandomNum(50, 100);
  const minimum = getRandomNum(1, 49);

  const arg1 = getRandomNum(minimum, maximum);
  const arg2 = getRandomNum(minimum, maximum);

  switch (pseudoRandomNumber) {
    case 1:
      question = `${arg1} + ${arg2}`;
      answer = `${arg1 + arg2}`;
      break;
    case 2:
      question = `${arg1} - ${arg2}`;
      answer = `${arg1 - arg2}`;
      break;
    case 3:
      question = `${arg1} * ${arg2}`;
      answer = `${arg1 * arg2}`;
      break;
    default:
      break;
  }
  return [question, answer];
};

export default () => game(gameData, description);
