const MissionUtils = require('@woowacourse/mission-utils');
const CheckVaild = require('./CheckVaild');
const { ERROR_MESSAGES } = require('./common/message');
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGES.NO_VALID_LOTTO_LENGTH}`);
    }
    CheckVaild.isVaildWinningNumber(numbers);
  }
}

module.exports = Lotto;
