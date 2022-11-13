const { MESSAGE, REWARD_ARRAY } = require('./constants');
const { Console } = require('@woowacourse/mission-utils');

const convertAnswerIntoArray = (answer) => {
  return answer.split(',').map((item) => Number(item));
};

const printWinningResult = (winningArray, percentage) => {
  Console.print(MESSAGE.OUTPUT_WINNING_STATISTICS);
  Console.print(MESSAGE.RESULT(winningArray, percentage));
};

const printMyLottosArray = (myLottosArray) => {
  myLottosArray.forEach((item) => {
    Console.print(`[${item.join(', ')}]`);
  });
};

const getRevenue = (winningArray) => {
  return winningArray.reduce((acc, value, index) => {
    if (value !== 0) {
      return acc + value * REWARD_ARRAY[index];
    }
    return acc;
  }, 0);
};

const getRateOfReturn = (revenue, purchaseMoney) => {
  return ((revenue / purchaseMoney) * 100).toFixed(1);
};

module.exports = {
  convertAnswerIntoArray,
  printWinningResult,
  getRevenue,
  getRateOfReturn,
  printMyLottosArray,
};
