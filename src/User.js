class User {
  #money;

  constructor() {
    this.#money = 0;
  }

  changeMoney(amount) {
    if (!this.validateMoney(amount)) {
      throw new Error("[ERROR] 구입 금액은 천원 단위로 입력해주세요");
    }
    this.#money += Number(amount);
  }

  validateMoney(amount) {
    return !(amount % 1000 !== 0 || amount < 1000);
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = User;
