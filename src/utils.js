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

module.exports = {
  printMessage,
  userInput,
  throwErrorMessage,
  checkIsNumber,
  checkIsOutOfRange,
}