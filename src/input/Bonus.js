class Bonus {
  #bonusNumber;
  #winningNumbers;

  constructor(bonusNumber, winningNumbers) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = Number(bonusNumber);
  }
}

module.exports = Bonus;
