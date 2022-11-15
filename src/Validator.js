const { ERROR_MSG } = require('./Constant');
const { duplicateNumbers, only6Numbers, outOfRange, prefix, notNumber } =
  ERROR_MSG;

class Validator {
  static validateInput(input) {
    if (/^\D|[^\d{1,2}]|,{2,}|\D[,]|,$/g.test(input.trim()))
      throw new Error(prefix + notNumber);
  }

  static validateMoney(money) {
    if (money % 1000 > 0)
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.only1000WonUnits);
  }

  static validateNumbers(numbers) {
    if (numbers.length !== 6) throw new Error(prefix + only6Numbers);
    if (new Set(numbers).size < 6) throw new Error(prefix + duplicateNumbers);
    if (numbers.reduce((isOut, no) => isOut || no < 1 || 45 < no, false))
      throw new Error(prefix + outOfRange);
  }

  static validateNumber(number) {
    if (number < 1 || 45 < number) throw new Error(prefix + outOfRange);
  }
}

module.exports = Validator;
