const { LOTTO_RESULT } = require('../constants');

class RankDeterminator {
  #winningNumbers;
  #bonusNumber;

  constructor({ winningNumbers, bonusNumber }) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static #reflectBonus(matchedCount, isBonusMatched) {
    let rank = LOTTO_RESULT.RANK[matchedCount];
    if (isBonusMatched && rank === 3) rank = 2;

    return rank;
  }

  getRank(ticket) {
    const ticketSet = new Set(ticket);
    const winningNumbersSet = new Set(this.#winningNumbers);
    const matchedCount = [...ticketSet].filter((number) => winningNumbersSet.has(number)).length;
    const isBonusMatched = ticketSet.has(this.#bonusNumber);

    return RankDeterminator.#reflectBonus(matchedCount, isBonusMatched);
  }
}

module.exports = RankDeterminator;
