const { Random } = require("@woowacourse/mission-utils");
const LottoSystem = require("./LottoSystem");
const ERROR_MESSAGES = require("../errorMessages");

class LottoMachine extends LottoSystem {
  constructor() {
    super();
  }

  buy(money) {
    this.validate(money);
    const amount = Math.floor(money / this.LOTTO_PRICE);
    return Array.from({ length: amount }, this.generate.bind(this));
  }

  generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      this.LOTTO_MIN_NUMBER,
      this.LOTTO_MAX_NUMBER,
      this.LOTTO_LENGTH,
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }

  validate(money) {
    this.isValidRange(money);
    this.isValidUnit(money);
  }

  isValidRange(money) {
    if (money < this.LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.MONEY_RANGE);
    }
  }

  isValidUnit(money) {
    const remainder = money % this.LOTTO_PRICE;
    if (remainder !== 0) {
      throw new Error(ERROR_MESSAGES.MONEY_UNIT);
    }
  }
}

module.exports = LottoMachine;
