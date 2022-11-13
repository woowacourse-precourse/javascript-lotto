const { Console } = require('@woowacourse/mission-utils');

class Input {
  static read(message, func) {
    Console.readLine(message, func);
  }
}

module.exports = Input;
