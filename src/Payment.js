const { MESSAGES } = require('./Constants');

class Payment {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validatePaymentInteger(numbers);
    this.validatePaymentMultipleOfThousand(numbers);
    this.validatePaymentNotNegative(numbers);
  }

  validatePaymentInteger(numbers) {
    if (!Number.isInteger(numbers)) {
      throw new Error(MESSAGES.ERR_PAYNUM_NOT_INT);
    }
  }

  validatePaymentMultipleOfThousand(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error(MESSAGES.ERR_PAYNUM_NOT_MULTIPLE_OF_THOUSAND);
    }
  }

  validatePaymentNotNegative(numbers) {
    if (numbers < 0) {
      throw new Error(MESSAGES.ERR_PAYNUM_NOT_POSITIVE);
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Payment;
