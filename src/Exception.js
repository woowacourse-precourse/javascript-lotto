const { MONEY, PUBLISH, ERROR_TEXT } = require('./Constant');

class Exception {
  purchase(money) {
    if (money % MONEY.MIN !== 0) {
      throw new Error(ERROR_TEXT.MIN_PURCHASE);
    }
  }

  range(number) {
    const ONLY_NUMBER = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!ONLY_NUMBER.test(number)) throw new Error(ERROR_TEXT.VALUE_BETWEEN);
  }

  deduplication(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(ERROR_TEXT.DUPLICATE_VALUE);
    }
  }

  length(numbers) {
    if (numbers.length !== PUBLISH.AMOUNT) {
      throw new Error(ERROR_TEXT.MIN_COUNT);
    }
  }
}

module.exports = Exception;
