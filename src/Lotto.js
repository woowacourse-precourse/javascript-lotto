// const MissionUtils = require('@woowacourse/mission-utils');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.lottoAscendingOrder(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    return numbers;
  }

  lottoAscendingOrder(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  getSortLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
