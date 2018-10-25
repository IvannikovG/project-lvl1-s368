import { game, getRandomNumber } from '..';

export default () => {
const description = 'Answer "yes" if number is even, otherwise answer "no".\n';
const gameData = () => {
	const question = Math.floor(Math.random() * 1000) + 1;
	const answer = question % 2 === 0 ? 'yes' : 'no';
	return [question, answer];
};
export default () => game(gameData, description);