const { Random } = require("@woowacourse/mission-utils");
const LottoSystem = require("./LottoSystem");
const ERROR_MESSAGES = require("../errorMessages");

class LottoMachine extends LottoSystem {
  constructor() {
    super();
  }

  buy(money) {
    this.validate(money);
    const amount = Math.floor(money / this.moneyUnit);
    return Array.from({ length: amount }, this.generate.bind(this));
  }

  generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      this.minNumber,
      this.maxNumber,
      this.lottoLength,
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }

  validate(money) {
    this.isValidRange(money);
    this.isValidUnit(money);
  }

  isValidRange(money) {
    if (money < this.moneyUnit) {
      throw new Error(ERROR_MESSAGES.MONEY_RANGE);
    }
  }

  isValidUnit(money) {
    const remainder = money % this.moneyUnit;
    if (remainder !== 0) {
      throw new Error(ERROR_MESSAGES.MONEY_UNIT);
    }
  }
}

module.exports = LottoMachine;
