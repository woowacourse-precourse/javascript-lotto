const { ERROR_MSG } = require('./Constant');
const { Console } = require('@woowacourse/mission-utils');
const { duplicateNumbers, only6Numbers, outOfRange, prefix, notNumber } =
  ERROR_MSG;

class IO {
  static validate(input) {
    if (/^\D|[^\d{1,2}]|,{2,}|\D[,]|,$/g.test(input.trim()))
      throw new Error(prefix + notNumber);
  }

  static validateNumbers(numbers) {
    if (numbers.length !== 6) throw new Error(prefix + only6Numbers);
    if (new Set(numbers).size < 6) throw new Error(prefix + duplicateNumbers);
    if (numbers.reduce((isOut, no) => isOut || no < 1 || 45 < no, false))
      throw new Error(prefix + outOfRange);
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
