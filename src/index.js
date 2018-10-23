import readlineSync from 'realine-sync';
import { car, cdr } from 'hexlet-pairs';

const games = (questionGen, gameCond = '') => {
	console.log('Welcome to the Brain Games!');
	console.log(gameCond);
	const getName = () => { 
		const username = readlineSync.question('May I have your name?: ');
		console.log(`Hello, ${username}!\n`);
		return username;
};


export default games;