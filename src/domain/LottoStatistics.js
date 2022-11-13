const Lotto = require("../Lotto");
const Utils = require("../Utils");

class LottoStatistics {
  constructor(winningLotto) {
    if (!winningLotto instanceof Lotto) {
      throw new ReferenceError("param's instance must be Lotto.");
    }
    if (!winningLotto.bonusNumber) {
      throw new ReferenceError("Lotto must have bonus number.");
    }

    this.winningNumbers = winningLotto.numbers;
    this.bonusNumber = winningLotto.bonusNumber;
  }

  match(numbers) {
    const numbersSet = new Set(numbers);
    const winningNumbersSet = new Set(this.winningNumbers);
    const matchedNumbersSet = Utils.intersect(numbersSet, winningNumbersSet);
    return [...matchedNumbersSet].length;
  }
}

module.exports = LottoStatistics;
