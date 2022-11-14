const { LottoNumberData } = require('../lotto-data/LottoNumberData');
const { RESTRICTIONS } = require('../lotto-data/Constant');

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
      throw '[ERROR] 숫자이외의 문자가 존재합니다.';
    }
  }

  checkCanBuy() {
    if (this.#numbers % RESTRICTIONS.thousand) {
      throw '[ERROR] 로또 구입 금액이 올바르지 않습니다';
    }
  }

  checkHowManyBuy() {
    return this.#numbers / RESTRICTIONS.thousand;
  }

  splitNumbers() {
    try {
      this.#numbers = this.#numbers.split(',');
    } catch (error) {
      throw '[ERROR] 당첨번호가 올바르지 않습니다.';
    }
  }

  checkDistinguishedByCommas() {
    if (this.#numbers.length === RESTRICTIONS.noComma) {
      throw '[ERROR] 당첨번호 사이를 쉼표로 구분해주세요';
    }
  }

  checkSixWinningNumbers() {
    if (this.#numbers.length !== RESTRICTIONS.lottoNumberCount_Six) {
      throw '[ERROR] 당첨번호가 6개가 아닙니다.';
    }
  }

  checkOnlyNumbers() {
    const result = this.#numbers.map((value) => +value);
    if (result.includes(NaN)) {
      throw '[ERROR] 당첨번호가 올바르지 않습니다.';
    }
  }

  checkNumberRangesFrom1To45ForArray() {
    this.#numbers.forEach((number) => {
      if (
        number < RESTRICTIONS.lottoNumberStart_One ||
        number > RESTRICTIONS.lottoNumberEnd_FortyFive
      ) {
        throw '[ERROR] 당첨번호가 올바르지 않습니다.';
      }
    });
  }

  checkDuplicates() {
    const numberSet = new Set(this.#numbers);
    if (numberSet.size !== this.#numbers.length) {
      throw '[ERROR] 중복되는 숫자가 존재합니다.';
    }
  }

  checkNumberRangesFrom1To45() {
    if (
      this.#numbers < RESTRICTIONS.lottoNumberStart_One ||
      this.#numbers > RESTRICTIONS.lottoNumberEnd_FortyFive
    ) {
      throw '[ERROR] 보너스 번호가 올바르지 않습니다.';
    }
  }

  checkOverlapsWithWinningNumber() {
    if (LottoNumberData.Winning.includes(this.#numbers)) {
      throw '[ERROR] 당첨번호와 중복되는 숫자가 존재합니다.';
    }
  }
}

module.exports = Lotto;
