const { Console, Random } = require("@woowacourse/mission-utils");
const { ERROR } = require("../data/constants");
const { isPositiveNumber, isDivideThousand } = require("../utils/utils");

class User {
  #inputMoney;
  #lottos = [];

  constructor(inputMoney) {
    this.validate(inputMoney);
    this.#inputMoney = inputMoney;
  }

  randomLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  validate(inputMoney) {
    if (!isPositiveNumber(inputMoney)) throw new Error(ERROR.RANGE);
    if (!isDivideThousand(inputMoney)) throw new Error(ERROR.DIVIDE);
  }

  countAvailableLotto() {
    return this.#inputMoney / 1000;
  }

  lottoPurchase() {
    for (let index = 0; index < this.countAvailableLotto(); index++) {
      this.#lottos.push(this.randomLottoNumber());
    }
  }

  printMyLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }
}

module.exports = User;
