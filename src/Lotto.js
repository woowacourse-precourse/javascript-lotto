const { isLottoNumbers } = require('./lib/utilFns');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!isLottoNumbers(numbers, 1, 45, 6)) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    return true;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
