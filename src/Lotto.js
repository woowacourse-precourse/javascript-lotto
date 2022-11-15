const MissionUtils = require('@woowacourse/mission-utils');
const { checkLottoRange, checkLottoDuplicate, checkLottoLength } = require('./Exception');
const { Message } = require('./Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!checkLottoLength(numbers) || !checkLottoDuplicate(numbers)) {
      throw new Error(Message.ERROR_LOTTO_COUNT);
    }
    if (!checkLottoRange(numbers)) {
      throw new Error(Message.ERROR_LOTTO_RANGE);
    }
  }

  getNumbers() {
    return [...this.#numbers].sort((before, current) => before - current);
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
