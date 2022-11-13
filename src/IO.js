const { ERROR_MSG } = require('./Constant');
const { Console } = require('@woowacourse/mission-utils');

class IO {
  static validate(input) {
    if (/^\D|[^\d{1,2}]|,{2,}|\D[,]|,$/g.test(input.trim()))
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.notNumber);
  }
  static print(msg) {
    Console.print(msg);
  }
  static readLine(msg, callback) {
    Console.readLine(msg, (input) => {
      IO.validate(input);
      callback(input);
    });
  }
  static close() {
    Console.close();
  }
}

module.exports = IO;
