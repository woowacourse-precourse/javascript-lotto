const { Validation } = require('./util');

class Machine {
  #insertedMoney;

  constructor(money) {
    this.validate(money);
    this.#insertedMoney = money;
  }

  get insertedMoney() {
    return this.#insertedMoney;
  }

  validate(money) {
    return Validation.isRightMoney(Number(money));
  }
}

module.exports = Machine;
