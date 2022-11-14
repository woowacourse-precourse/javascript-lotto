const { Console } = require('@woowacourse/mission-utils');
const { REGEX, ERROR } = require('./constants');

class Lotto {
  #numbers;

  constructor(inputStr) {
    this.#numbers = this.validate(inputStr);
  }

  validate(inputStr) {
    if (!REGEX.WINNING_NUMBER.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_WINNING_NUMBER);
    }

    const inputArr = inputStr.split(',').map(Number);
    const inputSet = new Set(inputArr);
    if (inputSet.size !== 6) {
      throw new Error(ERROR.ENTER_WITHOUT_REPETITION);
    }

    return inputArr;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
