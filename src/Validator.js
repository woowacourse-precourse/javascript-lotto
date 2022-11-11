// TODO: [ERROR] 부분 상수 처리
class Validator {
  static #isNumber(value) {
    return !Number.isNaN(Number(value));
  }

  static #isInteger(value) {
    return Number(value) === parseInt(value, 10);
  }

  static isValidInput(input) {
    // 빈입력인지
    if (!input.length) {
      throw new Error('[ERROR] 아무것도 입력하지 않았습니다.');
    }

    if (input !== input.trim()) {
      throw new Error('[ERROR] 입력에 공백이 포함되어 있습니다.');
    }

    return true;
  }

  static isValidNumber(input) {
    if (!Validator.#isNumber(input)) {
      throw new Error('[ERROR] 숫자(양수)만 입력할 수 있습니다.');
    }

    if (!Validator.#isInteger(input)) {
      throw new Error('[ERROR] 올바른 금액을 입력하세요.');
    }

    // if (Number(input) < 0) {
    //   throw new Error('[ERROR] 올바른 금액을 입력하세요.');
    // }
  }
}

module.exports = Validator;
