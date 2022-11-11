class LottoCounter {
  constructor(cash) {
    this.isValidCash(cash);
    this.inputtedCash = cash;
    this.countOfLotto = this.inputtedCash / INPUT_UNITS;
  }

  isValidCash(cash) {
    if (cash % INPUT_UNITS !== 0) {
      throw '[ERROR] 1,000원 단위의 금액만 입력 가능합니다.';
    }
    if (cash < INPUT_UNITS) {
      throw '[ERROR] 1,000원 미만의 금액으로 로또를 구매할 수 없습니다.';
    }

    return true;
  }
}

module.exports = LottoCounter;
