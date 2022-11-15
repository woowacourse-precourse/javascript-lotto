const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

class IO {
  static print(msg) {
    Console.print(msg);
  }

  static readLine(msg, callback) {
    Console.readLine(msg, (input) => {
      Validator.validateInput(input);
      callback(input);
    });
  }

  static close() {
    Console.close();
  }
}

module.exports = IO;
