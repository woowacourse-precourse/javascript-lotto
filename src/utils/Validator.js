const { ERROR_MESSAGES } = require('../constant/messages');

class Validator {
  validateInput(money) {
    this.validateNumber(money);
    this.validateUnit(money);
  }

  validateNumber(money) {
    const check = /^[0-9]+$/;
    if (!check.test(money)) throw new Error(ERROR_MESSAGES.type);
  }

  validateUnit(money) {
    if (parseInt(money, 10) === 0 || parseInt(money, 10) % 1000 !== 0)
      throw new Error(ERROR_MESSAGES.divisionByThousand);
  }

  validateLotto(numbers) {
    this.validateLength(numbers);
    this.validateDoubled(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.length);
    }
  }

  validateDoubled(numbers) {
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSAGES.overlap);
  }
}

module.exports = Validator;
