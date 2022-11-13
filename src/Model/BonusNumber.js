class BonusNumber {
  constructor(winLotto, inputNumber) {
    this.validate(winLotto, inputNumber);
    this.number = inputNumber;
  }
  validate(winLotto, inputNumber) {
    if (winLotto.lottoNumbers.includes(Number(inputNumber))) {
      throw new Error('[ERROR] 보너스 숫자와 정답 로또 숫자가 중복되었습니다.');
    }
  }
}

module.exports = BonusNumber;
