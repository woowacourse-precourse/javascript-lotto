const { Console } = require('@woowacourse/mission-utils');

class consoleWork {
  static takeInput(message) {
    Console.readline(message, callback);
  }

  static print(message) {
    Console.print(message);
  }

  static close() {
    Console.close();
  }
}

module.exports = consoleWork;
