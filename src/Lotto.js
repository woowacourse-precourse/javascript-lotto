const { LOTTO_ERROR_MESSAGE } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(LOTTO_ERROR_MESSAGE.LENGTH);
    if (new Set(numbers).size !== 6) throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE);
    const inRangeNumber = numbers.filter(x => x >= 1 && x <= 45).length;
    if (inRangeNumber !== 6) throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE);
  }
  // TODO: 추가 기능 구현
}


module.exports = Lotto;
