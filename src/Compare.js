class Compare {
  #lotto;
  #winning;
  #bonus;

  constructor(lotto, winning, bonus) {
    this.#lotto = lotto;
    this.#winning = winning;
    this.#bonus = bonus;
    this.compare();
  }

  compare() {
    this.#lotto.forEach((numbers) => {
      let count = { winningCount: 0, bonusCount: 0 };
      numbers.forEach((number) => {
        this.compareNumber(number, count);
        this.compareBonus(number, count);
      });
    });
  }

  compareNumber(number, count) {
    if (this.#winning.includes(number)) {
      count.winningCount += 1;
    }
  }

  compareBonus(number, count) {
    if (number === this.#bonus) {
      count.bonusCount += 1;
    }
  }
}

module.exports = Compare;
