const { isLottoNumbers, isDuplicated, isInclude } = require('./lib/utilFns');

class Lotto {
  #numbers;
  #bonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!isLottoNumbers(numbers, 1, 45, 6) || isDuplicated(numbers)) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    return true;
  }

  setBonus(bonusNumber) {
    const allNumbers = [...this.#numbers, bonusNumber];
    this.validateAllNumbers(allNumbers);
    this.#bonus = bonusNumber;
  }

  validateAllNumbers(allNumbers) {
    if (isDuplicated(allNumbers)) {
      throw new Error('[ERROR] 로또 번호와 보너스 번호는 중복되지 않아야 합니다.');
    }

    return true;
  }

  getScore(pickedNumbers) {
    const isIncludeNum = isInclude(pickedNumbers);
    const score = this.#numbers.filter(isIncludeNum).length;
    const bonusScore = isIncludeNum(this.#bonus) ? 1 : 0;

    return { score, bonusScore };
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
