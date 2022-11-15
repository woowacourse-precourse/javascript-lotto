const { LOTTO_NUMBER } = require("../utils/Constants");
const { BONUS_NUMBER_ERROR_MESSAGE, NUMBER_ERROR_MESSAGE, LOTTO_ERROR_MESSAGE } = require("../utils/Message");

class BonusNumber {
  #bonusNumber;

  constructor(winningNumbers, number) {
    this.winningNumbers = winningNumbers;
    this.validBonusNumber(number);
    this.#bonusNumber = number;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  
  validBonusNumber(number) {
    this.validFormat(number);
    this.validRange(number);
    this.checkOverlap(number);
  }
  
  validFormat(number) {
    const reg = /^[0-9]+$/;
    if (!reg.test(number)) {
      throw new Error(NUMBER_ERROR_MESSAGE.numberFormat);
    }
  }
  
  validRange(number) {
    if (number < LOTTO_NUMBER.minimum || LOTTO_NUMBER.maximum < number) {
      throw new Error(LOTTO_ERROR_MESSAGE.lottoNumberRange);
    }
  }

  checkOverlap(number) {
    if (this.winningNumbers.includes(number)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.bonusNumberOverlap);
    }
  }
}

module.exports = BonusNumber;
