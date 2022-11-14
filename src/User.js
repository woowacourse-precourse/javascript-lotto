class User {
  #money

  constructor(money) {
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = User;