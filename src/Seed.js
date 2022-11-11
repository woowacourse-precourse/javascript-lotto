const { ERROR_MESSAGE } = require("./constants");
class Seed {
  seedMoney;
  ticketAmount;
  constructor(seed) {
    this.validate(seed);
    this.numberOfLottos(seed);
    this.seedMoney = seed;
  }
  validate(seed) {
    this.isDiviedByThousand(seed);
  }

  isDiviedByThousand(seed) {
    if (seed % 1000 !== 0) throw new Error(ERROR_MESSAGE.SEED_THOUSAND);
  }

  numberOfLottos(money) {
    return (this.ticketAmount = money / 1000);
  }
}

module.exports = Seed;
