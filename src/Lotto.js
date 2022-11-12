const { LOTTO_ERROR_MESSAGE } = require('./constants');

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.validate(numbers);
    this.validateBonusNumber(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(LOTTO_ERROR_MESSAGE.LENGTH);
    if (new Set(numbers).size !== 6) throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE);
    const inRangeNumber = numbers.filter(x => x >= 1 && x <= 45).length;
    if (inRangeNumber !== 6) throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE);
  }
  
  validateBonusNumber(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) throw new Error(LOTTO_ERROR_MESSAGE.BONUS_DUPLICATE);
  }
}


module.exports = Lotto;
