const { Console } = require("@woowacourse/mission-utils");

const printMessage = (message) => {
  Console.print(message);
}

const userInput = (callback) => {
  Console.readLine((answer) => {
    callback(answer);
  })
}

module.exports = {
  printMessage,
  userInput,
}