const MissionUtils = require('@woowacourse/mission-utils');

const { Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers = Random.pickUniqueNumbersInRange(1, 45, 6)) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!this.isNotDuplicated(numbers)) {
      throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    }
    if (!this.isValidType(numbers)) {
      throw new Error('[ERROR] 로또 번호는 숫자만 가능합니다.');
    }
    if (!this.isValidRange(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  isNotDuplicated(numbers) {
    return new Set(numbers).size === 6;
  }

  isValidType(numbers) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(numbers.join(''));
  }

  isValidRange(numbers) {
    return numbers.every((num) => num >= 1 && num <= 45);
  }

  get genLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
