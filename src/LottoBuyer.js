class LottoBuyer {
  #money;

  constructor(money) {
    LottoBuyer.#validateMoney(money);
    this.#money = money;
  }

  get money() {
    return this.#money;
  }

  static #validateMoney(money) {
    if (money === '') {
      throw new Error('[ERROR] 빈 값을 입력하였습니다.');
    }

    if (money.includes(' ')) {
      throw new Error('[ERROR] 공백을 포함해 입력하였습니다.');
    }

    if (isNaN(money)) {
      throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
    }

    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000의 배수여야 합니다.');
    }
  }
}

module.exports = LottoBuyer;
