const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require('./constructor.js');

const printMessage = (message) => {
  Console.print(message);
}

const userInput = (command, callback) => {
  Console.readLine(command, (answer) => {
    callback(answer);
  })
}

const throwErrorMessage = (message) => {
  Console.print(`${ERROR.PREFIX} ${message}`);
  Console.close();
  throw new Error(ERROR.PREFIX);
}

module.exports = {
  printMessage,
  throwErrorMessage,
  userInput,
}