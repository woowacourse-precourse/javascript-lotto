class Bonus {
  #number;

  constructor(number) {
    this.#number = number;
    this.validate(number);
  }

  validate(number) {
    this.#validateLottoRange(number);
  }

  getNumber() {
    return +this.#number;
  }

  #validateLottoRange(number) {
    if (!/^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/.test(number)) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45사이 숫자여야 합니다.');
    }

    return this;
  }
}

module.exports = Bonus;
