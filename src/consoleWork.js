const { Console } = require('@woowacourse/mission-utils');

class ConsoleWork {
  static takeInput(message, callback) {
    Console.readLine(message, callback);
  }

  static print(message) {
    Console.print(message);
  }

  static close() {
    Console.close();
  }
}

module.exports = ConsoleWork;
