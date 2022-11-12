const { MESSAGE } = require('./constants');
const { Console } = require('@woowacourse/mission-utils');

const convertAnswerIntoArray = (answer) => {
  return answer.split(',').map((item) => Number(item));
};

const printWinningResult = (winningArray, percentage) => {
  Console.print(MESSAGE.OUTPUT_WINNING_STATISTICS);
  Console.print(
    MESSAGE.RESULT(
      winningArray[0],
      winningArray[1],
      winningArray[2],
      winningArray[3],
      winningArray[4],
      percentage
    )
  );
};

const getRevenue = (winningArray) => {
  const first = winningArray[0] * 5000;
  const second = winningArray[1] * 50000;
  const third = winningArray[2] * 1500000;
  const fourth = winningArray[3] * 30000000;
  const fifth = winningArray[4] * 2000000000;
  return first + second + third + fourth + fifth;
};

const getRateOfReturn = (revenue, purchaseMoney) => {
  return ((revenue / purchaseMoney) * 100).toFixed(1);
};

module.exports = {
  convertAnswerIntoArray,
  printWinningResult,
  getRevenue,
  getRateOfReturn,
};
