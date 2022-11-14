class Validator {
  constructor(ERROR_MESSAGE_HEADER = '[ERROR]') {
    this.ERROR_MESSAGE_HEADER = ERROR_MESSAGE_HEADER;
  }

  static #isNumber(value) {
    return !Number.isNaN(Number(value));
  }

  static #isInteger(value) {
    return Number(value) === parseInt(value, 10);
  }

  isValidInput = (input) => {
    if (!input.length) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 아무것도 입력하지 않았습니다.`);
    }

    if (input !== input.trim()) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 입력에 공백이 포함되어 있습니다.`);
    }

    return true;
  };

  isValidNumber = (input) => {
    if (!(Validator.#isNumber(input))) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 숫자(양수)만 입력할 수 있습니다.`);
    }

    return true;
  };

  isValidMoney = (input) => {
    if (!Validator.#isInteger(input)) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 올바른 금액을 입력하세요.`);
    }

    return true;
  };

  hasDuplicateNumberInNumbers(numbers) {
    if ([...new Set(numbers)].length !== numbers.length) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 로또 번호는 서로 중복되지 않아야 합니다.`);
    }
  }
}

module.exports = Validator;
