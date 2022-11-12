const { ERROR_MESSAGES } = require('./constant/messages');

class Validator {
  validateInput(money) {
    this.isNumber(money);
    this.isCorrectMoneyUnit(money);
  }

  isNumber(money) {
    const check = /^[0-9]+$/;
    if (!check.test(money))
      throw Error(ERROR_MESSAGES.INPUT_TYPE_MUST_BE_NUBMER);
  }

  isCorrectMoneyUnit(money) {
    if (parseInt(money, 10) % 1000 !== 0)
      throw Error(ERROR_MESSAGES.MONEY_MUST_BE_DIVIDED_INTO_1000);
  }

  // validateIsInputSixDigitNumber(numbers) {
  //   if (numbers.split(','))
  // }
}

module.exports = Validator;
