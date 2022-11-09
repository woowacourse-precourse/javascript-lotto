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
    if (!isPositiveNumber(inputMoney)) throw new Error(ERROR.RANGE);
    if (!isDivideThousand(inputMoney)) throw new Error(ERROR.DIVIDE);
  }

  print() {
    Console.print(this.#inputMoney);
  }
}

module.exports = User;
