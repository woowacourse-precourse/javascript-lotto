const Lotto = require("../Lotto");

class WinningNumbers {
  #winningNumbers;

  constructor(input) {
    this.validWinningNumbers(input);
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  winningNumbersConverter(numbers) {
    const winningNumberArray = numbers.split(',').map((item) => Number(item));
    return winningNumberArray;
  }

  validWinningNumbers(input) {
    const validLotto = new Lotto(this.winningNumbersConverter(input));
    this.#winningNumbers = validLotto.lottoNumber;
  }
}

module.exports = WinningNumbers;