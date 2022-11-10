const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require('./constructor.js');

const printMessage = (message) => {
  Console.print(message);
}

const printErrorMessage = (message) => {
  Console.print(`${ERROR.PREFIX} ${message}`);
}

const userInput = (callback) => {
  Console.readLine((answer) => {
    callback(answer);
  })
}

module.exports = {
  printMessage,
  printErrorMessage,
  userInput,
}