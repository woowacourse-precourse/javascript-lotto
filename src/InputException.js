class InputException {
  #isNotANumber(value) {
    if (isNaN(value)) {
      throw new Error('[ERROR] 구입금액은 숫자만 입력할 수 있습니다.');
    }
  }

  #isNegativeOrZero(value) {
    if (Math.sign(value) !== 1) {
      throw new Error('[ERROR] 구입금액은 양수만 입력할 수 있습니다.');
    }
  }

  #isNotDivisibleBy1000(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000원 단위로 입력할 수 있습니다.');
    }
  }

  #isNoValue(value) {
    if (value === '') {
      throw new Error('[ERROR] 값을 입력해야 합니다.');
    }
  }

  handlePurchaseAmountException(amount) {
    this.#isNoValue(amount);
    this.#isNotANumber(amount);
    this.#isNegativeOrZero(amount);
    this.#isNotDivisibleBy1000(amount);
  }
}

module.exports = InputException;
