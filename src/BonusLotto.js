class BonusLotto {
  #number;

  constructor(number, winningNumbers) {
    BonusLotto.validate(number, winningNumbers);
    this.#number = number;
  }

  static validate(number, winningNumbers) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!regExp.test(number)) {
      throw new Error('[ERROR] 로또 번호는 1~45범위의 숫자여야 합니다.');
    }
    if (winningNumbers.includes(number)) {
      throw new Error('[ERROR] 보너스 번호가 당첨 번호에 중복되는 값입니다.');
    }
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = BonusLotto;
