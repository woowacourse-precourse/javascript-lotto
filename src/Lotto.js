const { ERROR, LOTTO } = require('./utiles/Constant');

// 로또회사

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (this.#invalidLength(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.COUNT}`);
    if (this.#duplication(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.DUPLICATION}`);
    if (isNaN(numbers.join('')))
      throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (this.#invalidNumbersRange(numbers))
      throw new Error(`${ERROR.PREFIX} ${ERROR.RANGE}`);
  }

  #invalidLength(numbers) {
    return numbers.length !== LOTTO.COUNT;
  }

  #duplication(numbers) {
    return new Set(numbers).size !== numbers.length;
  }

  #invalidNumbersRange(numbers) {
    return (
      numbers.filter((number) => this.#inRange(number)).length !==
      numbers.length
    );
  }

  #inRange(number) {
    return LOTTO.RANGE_MIN <= number && LOTTO.RANGE_MAX >= number;
  }

  addBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#numbers.push(bonusNumber);
  }

  #validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber))
      throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (!this.#inRange(bonusNumber))
      throw new Error(`${ERROR.PREFIX} ${ERROR.RANGE}`);
  }

  getMatchCount(oneLottoNumbers) {
    return oneLottoNumbers.filter((lottoNumber) =>
      this.#numbers.include(lottoNumber)
    ).length;
  }
}

module.exports = Lotto;
