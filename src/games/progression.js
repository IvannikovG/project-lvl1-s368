import game from '..';
import getRandomNum from '../utils';

const description = 'What`s the missing number?';

const gameData = () => {
  const progressionLength = 10;
  let currentNum = getRandomNum(1, 10);
  const step = getRandomNum(1, 10);
  const missingNumberPosition = getRandomNum(0, progressionLength - 1);
  const progression = [];
  let answer;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingNumberPosition) {
      progression.push('...');
      answer = String(currentNum);
      currentNum += step;
    }
    progression.push(currentNum);
    currentNum += step;
  }
  const question = `${progression.join(' ')}?`;
  return [question, answer];
};

export default () => game(gameData, description);
