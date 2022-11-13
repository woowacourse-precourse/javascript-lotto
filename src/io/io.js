const { Console } = require('@woowacourse/mission-utils');

class Io {
  static input(message, callback) {
    Console.readLine(message, callback);
  }

  static output(message) {
    Console.print(message);
  }
}

module.exports = Io;
