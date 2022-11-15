const {
  validate,
  areWinningNumbers,
  isBonusNumber,
} = require('./utils/Validator');

class LottoGame {
  #winningNumbers;

  #bonusNumber;

  setWinningNumbers(numbers) {
    validate(numbers, areWinningNumbers);
    this.#winningNumbers = numbers.split(',').map(Number);
  }

  setBonusNumber(number) {
    validate(number, isBonusNumber(this.#winningNumbers));
    this.#bonusNumber = Number(number);
  }

  computeWinningMap(tickets) {
    return tickets.reduce((acc, ticket) => {
      const rank = ticket.getRank(this.#winningNumbers, this.#bonusNumber);
      if (rank) {
        acc[rank] = (acc[rank] || 0) + 1;
      }
      return acc;
    }, {});
  }
}

module.exports = LottoGame;
