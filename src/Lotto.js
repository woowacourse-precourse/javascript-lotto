const { ERROR } = require('./constants/constants.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!this.isSixLottoNumbers(numbers)) {
      throw new Error(ERROR.NOT_SIX_LOTTO_NUMBERS_ERROR);
    }
    if (!this.isNotLottoNumberDuplicated(numbers)) {
      throw new Error(ERROR.LOTTO_NUMBER_DUPLICATED_ERROR);
    }
    if (!this.isAllLottoNumberInRange(numbers)) {
      throw new Error(ERROR.LOTTO_NUMBER_OUT_OF_RANGE_ERROR);
    }
  }

  isSixLottoNumbers(numbers) {
    return numbers.length === 6;
  }

  isNotLottoNumberDuplicated(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  isLottoNumberInRange(number) {
    return number >= 1 && number <= 45;
  }

  isAllLottoNumberInRange(numbers) {
    return numbers.every((number) => this.isLottoNumberInRange(number));
  }

  getNumbers() {
    return this.#numbers;
  }

  getNumberOfMatching(winningNumbers) {
    let numberOfMatchingWithWinningNumbers = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) numberOfMatchingWithWinningNumbers += 1;
    });
    return numberOfMatchingWithWinningNumbers;
  }

  isMatchingWithBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
