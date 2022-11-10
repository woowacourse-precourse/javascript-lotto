class Store {
  #money;

  constructor(money) {
    this.validate(money);
  }

  validate(money) {
    if (/[^0-9]/.test(money)) {
      throw new Error('[ERROR] 로또 구입 금액은 숫자여야 합니다.');
    }
    if (money % 1000) {
      throw new Error('[ERROR] 로또 구입 금액은 천 원 단위여야 합니다.');
    }
  }
}

module.exports = Store;
