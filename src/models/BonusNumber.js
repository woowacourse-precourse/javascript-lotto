class BonusNumber {
  #bonusNumber;

  constructor(input) {
    this.validBonusNumber(input);
    this.#bonusNumber = parseInt(input);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  validBonusNumber(input) {
    const reg = /^[0-9]+$/;
    if (!reg.test(input)) {
      throw new Error('[ERROR] 보너스 숫자는 숫자만 입력 가능합니다.');
    }
  }
}

module.exports = BonusNumber;
