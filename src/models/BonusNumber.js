class BonusNumber {
  #bonusNumber;

  constructor(number) {
    this.validBonusNumber(number);
    this.#bonusNumber = parseInt(number);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  validBonusNumber(number) {
    this.validFormat(number);
    this.validRange(number);
  }

  validFormat(number) {
    const reg = /^[0-9]+$/;
    if (!reg.test(number)) {
      throw new Error('[ERROR] 보너스 숫자는 숫자만 입력 가능합니다.');
    }
  }

  validRange(number) {
    if (number < 1 || 45 < number) {
      throw new Error('[ERROR] 숫자의 범위는 1부터 45까지 입니다.');
    }
  }
}

module.exports = BonusNumber;
