const { Console } = require("@woowacourse/mission-utils");
const { ERROR, LOTTO } = require('./constructor.js');

const userInput = (command, callback) => {
  Console.readLine(command, (answer) => {
    callback(answer);
  })
}

const printMessage = (message) => {
  Console.print(message);
}

const throwErrorMessage = (message) => {
  Console.print(`${ERROR.PREFIX} ${message}`);
  Console.close();
  throw new Error(ERROR.PREFIX);
}

const checkIsNumber = (input) => {
  if (isNaN(input)) {
    throwErrorMessage(ERROR.ONLY_NUMBER);
  }
}

const checkIsOutOfRange = (number) => {
  if (number < LOTTO.MIN || number > LOTTO.MAX) {
    throwErrorMessage(ERROR.OUT_OF_NUMEBR_RANGE);
  }
}

const printRankCountMessage = (result) => {
  let message = ''
  const reversedKeys = Object.keys(result).sort((key1, key2) => key2 - key1);
  
  for (let rank of reversedKeys) {
    const { count, prize } = result[rank];
    rank = parseInt(rank);
    if (rank === 1) message += '6개 일치';
    if (rank === 2) message += '5개 일치, 보너스 볼 일치';
    if (rank === 3) message += '5개 일치';
    if (rank === 4) message += '4개 일치';
    if (rank === 5) message += '3개 일치';
    message += ` (${prize.toLocaleString()}원) - ${count}개\n`
  }

  printMessage(message);
}

const printRatioMessage = (percent) => {
  printMessage(`총 수익률은 ${percent.toLocaleString()}%입니다.`);
}

module.exports = {
  printMessage,
  userInput,
  throwErrorMessage,
  checkIsNumber,
  checkIsOutOfRange,
  printRankCountMessage,
  printRatioMessage,
}