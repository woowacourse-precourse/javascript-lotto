const { Console } = require('@woowacourse/mission-utils');

class InputConsole {
  trigger(message, callback) {
    Console.readLine(message, callback);
  }
}

module.exports = InputConsole;
