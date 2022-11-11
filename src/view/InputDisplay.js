const { Console } = require('@woowacourse/mission-utils');

class InputDisplay {
  getInput(message, callback) {
    Console.readLine(message, callback);
  }
}

module.exports = InputDisplay;
