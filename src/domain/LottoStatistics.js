const Utils = require("../Utils");

class LottoStatistics {
  match(numbers, winningNumbers) {
    const numbersSet = new Set(numbers);
    const winningNumbersSet = new Set(winningNumbers);
    const matchedNumbersSet = Utils.intersect(numbersSet, winningNumbersSet);
    return [...matchedNumbersSet].length;
  }
}

module.exports = LottoStatistics;
