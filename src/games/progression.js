import game from '..';
import getRandomNum from '../utils';

const description = 'What`s the missing number?';

const gameData = () => {
  const progressionLength = 10;
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);

  let question = '';
  const missingNumberPosition = getRandomNum(0, progressionLength - 1);
  const answer = start + step * missingNumberPosition;
  for (let i = 0; i <= progressionLength - 1; i += 1) {
  	if (i === missingNumberPosition) {
  		question += '.. ';
  		i += 1;
  	}
    question += `${start + step *  i }`;
  }
  return [question, answer];
};

export default () => game(gameData, description);
