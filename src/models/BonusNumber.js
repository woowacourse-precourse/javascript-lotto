const { LOTTO_NUMBER } = require("../utils/Constants");

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
      throw new Error('[ERROR] 보너스 숫자는 숫자만 입력 가능합니다.');
    }
  }
  
  validRange(number) {
    if (number < LOTTO_NUMBER.minimum || LOTTO_NUMBER.maximum < number) {
      throw new Error('[ERROR] 숫자의 범위는 1부터 45까지 입니다.');
    }
  }

  checkOverlap(number) {
    if (this.winningNumbers.includes(number)) {
      throw new Error('[ERROR] 보너스 숫자는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

module.exports = BonusNumber;
