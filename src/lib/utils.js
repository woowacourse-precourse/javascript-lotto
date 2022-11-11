const { MESSAGE } = require('./constants');
const { Console } = require('@woowacourse/mission-utils');

const convertAnswerIntoArray = (answer) => {
  return answer.split(',').map((item) => Number(item));
};

const printWinningResult = (winningArray, percentage) => {
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

module.exports = { convertAnswerIntoArray, printWinningResult };
