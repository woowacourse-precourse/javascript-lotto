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
    return 1;
  }
}

module.exports = User;
