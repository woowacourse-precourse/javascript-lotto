// constant
const {
  RESTRICTIONS,
  ERROR_MESSAGE,
} = require('./components/lotto-data/Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  returnNumbers() {
    return this.#numbers;
  }

  checkIssuedNumberFromComputer() {
    this.checkSixWinningNumbers();
    this.checkOnlyNumbers();
    this.checkNumberRangesFrom1To45ForArray();
    this.checkDuplicates();
    return this.#numbers;
  }

  checkOnlyNumber() {
    if (/\D/.test(this.#numbers)) {
      throw `${ERROR_MESSAGE.hasString}`;
    }
  }

  splitNumbers() {
    try {
      this.#numbers = this.#numbers.split(',');
    } catch (error) {
      throw `${ERROR_MESSAGE.notCorrect}`;
    }
  }

  checkOnlyNumbers() {
    const result = this.#numbers.map((value) => +value);
    if (result.includes(NaN)) {
      throw `${hasString}`;
    }
  }

  checkNumberRangesFrom1To45ForArray() {
    this.#numbers.forEach((number) => {
      if (
        number < RESTRICTIONS.lottoNumberStart_One ||
        number > RESTRICTIONS.lottoNumberEnd_FortyFive
      ) {
        throw `${ERROR_MESSAGE.outOfRange}`;
      }
    });
  }

  checkSixWinningNumbers() {
    if (this.#numbers.length !== RESTRICTIONS.lottoNumberCount_Six) {
      throw `${ERROR_MESSAGE.notSix}`;
    }
  }

  checkDuplicates() {
    const numberSet = new Set(this.#numbers);
    if (numberSet.size !== this.#numbers.length) {
      throw `${ERROR_MESSAGE.hasDuplication}`;
    }
    return this.#numbers;
  }

  checkNumberRangesFrom1To45() {
    if (
      this.#numbers < RESTRICTIONS.lottoNumberStart_One ||
      this.#numbers > RESTRICTIONS.lottoNumberEnd_FortyFive
    ) {
      throw `${ERROR_MESSAGE.outOfRange}`;
    }
  }
}

module.exports = Lotto;
