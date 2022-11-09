const { Console, Random } = require("@woowacourse/mission-utils");

class User {
  #inputMoney;

  constructor(inputMoney) {
    this.validate(inputMoney);
    this.#inputMoney = inputMoney;
  }

  validate(inputMoney) {}

  print() {
    Console.print(this.#inputMoney);
  }
}

module.exports = User;
