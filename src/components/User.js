const { Console, Random } = require("@woowacourse/mission-utils");
const { ERROR } = require("../data/constants");
const { isPositiveNumber, isDivideThousand } = require("../utils/utils");

class User {
  #inputMoney;

  constructor(inputMoney) {
    this.validate(inputMoney);
    this.#inputMoney = inputMoney;
  }

  validate(inputMoney) {
    if (!isDivideThousand(inputMoney)) throw new Error(ERROR.DIVIDE);
    if (!isPositiveNumber(inputMoney)) throw new Error(ERROR.RANGE);
  }

  print() {
    Console.print(this.#inputMoney);
  }
}

module.exports = User;
