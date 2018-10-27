import game from '..';

const description = 'What is the result of the expression?\n';

const gameData = () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pseudoRandomNumber = getRandomNum(1, 10);

  let question;
  let answer;

  const maximum = Math.floor(Math.random() * 500) + 1;
  const minimum = Math.floor(Math.random() * 50) + 1;

  const arg1 = getRandomNum(minimum, maximum);
  const arg2 = getRandomNum(minimum, maximum);

  switch (pseudoRandomNumber) {
    case 1:
    case 4:
    case 6:
      question = `${arg1} + ${arg2}`;
      answer = `${arg1 + arg2}`;
      break;
    case 2:
    case 5:
    case 7:
      question = `${arg1} - ${arg2}`;
      answer = `${arg1 - arg2}`;
      break;
    case 3:
    case 8:
    case 9:
      question = `${arg1} * ${arg2}`;
      answer = `${arg1 * arg2}`;
      break;
    case 10:
      question = `Unlucky! ${arg1} ** ${arg2}`;
      answer = `${arg1 ** arg2}`;
      break;
    default:
      break;
  }
  return [question, answer];
};

export default () => game(gameData, description);
