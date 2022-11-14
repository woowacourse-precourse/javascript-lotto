class User {
  #money

  constructor(money) {
    if (!this.isValid(money)) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위의 수여야 합니다.");
    }
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }

  isValid(money) {
    if (isNaN(money)) {
      return false;
    }
    if (money % 1000 != 0) {
      return false;
    }
    return true;
  }
}

module.exports = User;