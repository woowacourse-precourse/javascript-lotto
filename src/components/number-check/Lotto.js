const { LottoNumberData } = require('../lotto-data/LottoNumberData');
const { RESTRICTIONS, ERROR_MESSAGE } = require('../lotto-data/Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  checkUserInputMoney() {
    this.checkOnlyNumber();
    this.checkCanBuy();
    return this.checkHowManyBuy();
  }

  checkUserWinningNumber() {
    this.splitNumbers();
    this.checkDistinguishedByCommas();
    this.checkSixWinningNumbers();
    this.checkOnlyNumbers();
    this.checkNumberRangesFrom1To45ForArray();
    this.checkDuplicates();
    return this.#numbers;
  }

  checkUserBonusNumber() {
    this.checkOnlyNumber();
    this.checkNumberRangesFrom1To45();
    this.checkOverlapsWithWinningNumber();
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

  checkCanBuy() {
    if (this.#numbers % RESTRICTIONS.thousand) {
      throw `${ERROR_MESSAGE.notCorrect}`;
    }
  }

  checkHowManyBuy() {
    return this.#numbers / RESTRICTIONS.thousand;
  }

  splitNumbers() {
    try {
      this.#numbers = this.#numbers.split(',');
    } catch (error) {
      throw `${ERROR_MESSAGE.notCorrect}`;
    }
  }

  checkDistinguishedByCommas() {
    if (this.#numbers.length === RESTRICTIONS.noComma) {
      throw `${ERROR_MESSAGE.notComma}`;
    }
  }

  checkSixWinningNumbers() {
    if (this.#numbers.length !== RESTRICTIONS.lottoNumberCount_Six) {
      throw `${ERROR_MESSAGE.notSix}`;
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

  checkDuplicates() {
    const numberSet = new Set(this.#numbers);
    if (numberSet.size !== this.#numbers.length) {
      throw `${ERROR_MESSAGE.hasDuplication}`;
    }
  }

  checkNumberRangesFrom1To45() {
    if (
      this.#numbers < RESTRICTIONS.lottoNumberStart_One ||
      this.#numbers > RESTRICTIONS.lottoNumberEnd_FortyFive
    ) {
      throw `${ERROR_MESSAGE.outOfRange}`;
    }
  }

  checkOverlapsWithWinningNumber() {
    if (LottoNumberData.Winning.includes(this.#numbers)) {
      throw `${ERROR_MESSAGE.hasDuplicationWithWinning}`;
    }
  }
}

module.exports = Lotto;
