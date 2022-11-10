class User {
  constructor() {
    this.money = 0;
    this.lotto = [];
  }

  getMoney() {
    return this.money;
  }

  getLotto() {
    return this.lotto;
  }

  setMoney(money) {
    this.money = Number(money);
  }

  setLotto(lotto) {
    this.lotto = lotto;
  }

  validateMoney(money) {
    if (money === '0') {
      return;
    }
    if (!Number(money)) {
      throw new Error('[ERROR] 로또 구입 금액이 숫자가 아닙니다');
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액이 1000원 단위가 아닙니다.');
    }
  }
}

module.exports = User;
