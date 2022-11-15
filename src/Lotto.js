const MissionUtils = require('@woowacourse/mission-utils');
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
  }
}

module.exports = Lotto;
