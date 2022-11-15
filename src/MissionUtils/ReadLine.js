const { Console } = require('@woowacourse/mission-utils');
const { Messages } = require('../Constants');

const getPayout = (callback) => {
	Console.readLine(Messages.START_BUY, (pay) => callback(pay));
	Console.close();
};

const getWinningNumbers = (callback) => {
	Console.readLine(Messages.INSERT_WINNING, (numbers) => callback(numbers));
	Console.close();
};

const getBonusNumber = (callback) => {
	Console.readLine(Messages.INSERT_BONUS, (number) => callback(number));
	Console.close();
};

module.exports = {
	getPayout,
	getWinningNumbers,
	getBonusNumber,
};
