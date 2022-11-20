const { Console } = require('@woowacourse/mission-utils');

module.exports = {
  printMessage(message) {
    Console.print(message);
  },

  requireUserInput(message, handleInput) {
    Console.readLine(message, (input) => handleInput(input));
  },

  exitProgram() {
    Console.close();
  },
};
