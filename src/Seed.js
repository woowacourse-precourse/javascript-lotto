const { ERROR_MESSAGE, LOTTO } = require("./constants");

class Seed {
  seedMoney;
  ticketAmount;
  constructor(seed) {
    this.validate(seed);
    this.numberOfLottos(seed);
    this.seedMoney = seed;
  }
  validate(money) {
    this.isDiviedByThousand(money);
  }

  isDiviedByThousand(money) {
    if (money % LOTTO.MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.SEED_THOUSAND);
    }
  }

  numberOfLottos(money) {
    return (this.ticketAmount = money / LOTTO.MONEY_UNIT);
  }
}

module.exports = Seed;
