const LOTTO = require('../constant/constant');

class BonusNumber {
  #number;
  constructor(winLotto, inputNumber) {
    this.validate(winLotto, inputNumber);
    this.#number = inputNumber;
  }

  get number() {
    return this.#number;
  }

  validate(winLotto, inputNumber) {
    this.checkDuplicate(winLotto, inputNumber);
    this.checkNumber(inputNumber);
    this.checkNumberRange(inputNumber);
  }
  checkDuplicate(winLotto, inputNumber) {
    if (winLotto.lottoNumbers.includes(Number(inputNumber))) {
      throw new Error('[ERROR] 보너스 숫자와 정답 로또 숫자가 중복되었습니다.');
    }
  }
  checkNumber(inputNumber) {
    const NumberReg = /[0-9]/g;
    if (!NumberReg.test(inputNumber)) {
      throw new Error('[ERROR] 보너스 숫자는 숫자여야합니다.');
    }
  }
  checkNumberRange(inputNumber) {
    if (!(inputNumber >= LOTTO.RANGE.START && inputNumber <= LOTTO.RANGE.END)) {
      throw new Error('[ERROR] 보너스 숫자는 로또 숫자 범위 내여야 합니다.');
    }
  }
}

module.exports = BonusNumber;
