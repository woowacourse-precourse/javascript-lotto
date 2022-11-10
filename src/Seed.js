class Seed {
  seed;
  constructor(seed) {
    this.validate(seed);
  }
  validate(seed) {
    this.isDiviedByThousand(seed);
  }

  isDiviedByThousand(seed) {
    if (seed % 1000 !== 0) throw new Error("[ERROR] 1000원 단위 아님");
  }
}

module.exports = Seed;
