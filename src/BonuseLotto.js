class BonuseLotto {
  #number;

  constructor(number, winningNumbers) {
    BonuseLotto.validate(number, winningNumbers);
    this.#number = number;
  }

  static validate(number, winningNumbers) {
    if (winningNumbers.includes(number)) {
      throw new Error('[ERROR] 보너스 번호가 당첨 번호에 중복되는 값입니다.');
    }
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = BonuseLotto;
