class Seed {
  ticketAmount;
  constructor(seed) {
    this.validate(seed);
    this.numberOfLottos(seed);
  }
  validate(seed) {
    this.isDiviedByThousand(seed);
  }

  isDiviedByThousand(seed) {
    if (seed % 1000 !== 0) throw new Error("[ERROR] 1000원 단위 아님");
  }

  numberOfLottos(money) {
    return (this.ticketAmount = money / 1000);
  }
}

module.exports = Seed;
