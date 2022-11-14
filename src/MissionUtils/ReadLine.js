const { Console } = require('@woowacourse/mission-utils');
const { Messages } = require('../Constants');

class ReadLine {
	payout(callback) {
		Console.readline(Messages.START_BUY, (pay) => callback(pay));
	}
}

module.exports = ReadLine;
