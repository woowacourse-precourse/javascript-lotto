const { isLottoNumbers, isDuplicated, isInclude } = require('./Util');
const { ERROR_MSG, LOTTOS } = require('./lib/constant');

class Lotto {
  #numbers;
  #bonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const { start, end, size } = LOTTOS;

    if (!isLottoNumbers(numbers, start, end, size) || isDuplicated(numbers)) {
      throw new Error(ERROR_MSG.invalidLottos);
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
      throw new Error(ERROR_MSG.duplicatedLottosAndBonus);
    }

    return true;
  }

  getScore(pickedNumbers) {
    const isIncludeNum = isInclude(pickedNumbers);
    const score = this.#numbers.filter(isIncludeNum).length;
    const bonusScore = isIncludeNum(this.#bonus) ? 1 : 0;

    return { score, bonusScore };
  }
}

module.exports = Lotto;
