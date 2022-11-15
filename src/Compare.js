class Compare {
  #lotto;
  #winning;
  #bonus;

  constructor(lotto, winning, bonus) {
    this.#lotto = lotto;
    this.#winning = winning;
    this.#bonus = bonus;
    this.compareResult = { THREE: 0, FOUR: 0, FIVE: 0, FIVE_BONUS: 0, SIX: 0 };
    this.compare();
  }

  compare() {
    this.#lotto.forEach((numbers) => {
      let count = { winningCount: 0, bonusCount: 0 };
      numbers.forEach((number) => {
        this.compareNumber(number, count);
        this.compareBonus(number, count);
      });

      this.compareTotal(count);
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

  compareTotal(count) {
    if (count.winningCount === 3) this.compareResult.THREE += 1;
    if (count.winningCount === 4) this.compareResult.FOUR += 1;
    if (count.winningCount === 5) {
      if (count.bonusCount === 1) this.compareResult.FIVE_BONUS += 1;
      else this.compareResult.FIVE += 1;
    }
    if (count.winningCount === 6) this.compareResult.SIX += 1;
    console.log(this.compareResult);
  }
}

module.exports = Compare;
