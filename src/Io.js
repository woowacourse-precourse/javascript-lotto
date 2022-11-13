const { Console } = require('@woowacourse/mission-utils');

class Io {
  static inputByUser(question, callback) {
    Console.readLine(question, callback);
  }

  static printConsole(sentence) {
    Console.print(sentence);
  }
}

module.exports = Io;
