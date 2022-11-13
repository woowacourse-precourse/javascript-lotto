const { Console } = require('@woowacourse/mission-utils');

class Io {
  static inputByUser(question, callback) {
    Console.readLine(question, callback);
  }
}

module.exports = Io;
