const { MissionUtils } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const numberSet = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.length !== numberSet.size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    [...numbers].forEach((number) => {
      if (number <= 0 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1~45번 사이여야 합니다.');
      }
      if (!Number(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
