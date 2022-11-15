const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants');

const printWinningResult = (winningArray, percentage) => {
  Console.print(MESSAGE.OUTPUT_WINNING_STATISTICS);
  Console.print(MESSAGE.RESULT(winningArray, percentage));
};

const printMyLottosArray = (myLottosArray) => {
  myLottosArray.forEach((item) => {
    Console.print(`[${item.join(', ')}]`);
  });
};

module.exports = { printWinningResult, printMyLottosArray };
