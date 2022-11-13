const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    numbers = numbers.split(',');
    const set = new Set(numbers);
    if (set.size !== numbers.length)
      throw new Error('[ERROR] 로또 번호는 중복되지 않는 6개여야 합니다.');
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach((num) => {
      if (num > 45 || num < 1)
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  }

  validateBonus(number) {
    numbers.forEach((num) => {
      if (num > 45 || num < 1)
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  }

  getWinningNumbers() {}
}

module.exports = Lotto;
