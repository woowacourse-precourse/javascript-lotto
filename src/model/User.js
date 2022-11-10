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
    this.money = money;
  }

  setLotto(lotto) {
    this.lotto = lotto;
  }
}

module.exports = User;
