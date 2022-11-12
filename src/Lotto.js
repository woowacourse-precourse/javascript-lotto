const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map((num) => parseInt(num, 10));
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach(this.checkNumberValidity);
    const UNIQUE_NUMBERS = new Set(numbers);
    if (UNIQUE_NUMBERS.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }

  checkNumberValidity(num) {
    const VALID_NUMBER_REGEX = /^[\d]+$/;
    const LOWER_BOUND = 1;
    const UPPER_BOUND = 45;
    const VALID_BOUND = ((+num) >= LOWER_BOUND && (+num) <= UPPER_BOUND);
    if (!VALID_NUMBER_REGEX.test(num) || !VALID_BOUND) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
    }
  }

  setBounusNumber(bonus) {
    this.checkBonusNumberValidity(bonus);
    this.#numbers.push(+bonus);
  }

  checkBonusNumberValidity(num) {
    this.checkNumberValidity(num);
    if (this.#numbers.includes(+num)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복되면 안됩니다.');
    }
  }
}

module.exports = Lotto;
