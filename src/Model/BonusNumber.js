class BonusNumber {
  constructor(winLotto, inputNumber) {
    this.validate(winLotto, inputNumber);
    this.number = inputNumber;
  }
  validate(winLotto, inputNumber) {
    this.checkDuplicate(winLotto, inputNumber);
    this.checkNumber(inputNumber);
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
}

module.exports = BonusNumber;
