const { RANKS } = require('../constants');

class LottoChecker {
  #lottoTickets;
  #winningNumbers;
  #bonusNumber;

  constructor(lottoTickets, winningNumbers, bonusNumber) {
    this.#lottoTickets = lottoTickets;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getLottoRankings() {
    const initialRanks = RANKS.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
    }, {});

    const ranks = this.#lottoTickets.reduce(
      (acc, { numbers }) => this.#rankLottoTickets(acc, numbers),
      initialRanks,
    );

    return ranks;
  }

  #rankLottoTickets(ranks, numbers) {
    const newRanks = ranks;
    const matchCount = this.#findMatchCount(numbers);

    if (this.#isBlank(matchCount)) {
      return ranks;
    }

    if (this.#isSecondPlace(matchCount, numbers)) {
      const key = RANKS[RANKS.length - 1];
      newRanks[key] = (ranks[key] || 0) + 1;
    }

    const key = RANKS[matchCount - 3];
    newRanks[key] = (ranks[key] || 0) + 1;

    return newRanks;
  }

  #findMatchCount(numbers) {
    return numbers.filter((number) => this.#isWinningNumber(number)).length;
  }

  #isWinningNumber(number) {
    return this.#winningNumbers.includes(number);
  }

  #isBlank(matchCount) {
    return matchCount < 3;
  }

  #isSecondPlace(matchCount, numbers) {
    return matchCount === 5 && numbers.includes(this.#bonusNumber);
  }
}

module.exports = LottoChecker;
