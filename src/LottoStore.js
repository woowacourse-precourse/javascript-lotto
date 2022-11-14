class LottoStore {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (/[^0-9]/g.test(number)) {
        throw new Error("[ERROR] 구입금액은 숫자로만 이루어져야 합니다.")
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000 단위여야 합니다.");
    }
  }

  


}

module.exports = LottoStore;
