const { MATCH_COUNT, INDEX, NUMBER_OF_RANKS } = require("../utils/constants");

class RankCalculator {
  #playerLottos;
  #winningLotto;

  constructor(playerLottos, winningLotto) {
    this.#playerLottos = playerLottos;
    this.#winningLotto = winningLotto;
  }

  #getMatchNumber(playerNumbers, winningNumbers) {
    return playerNumbers.filter((number) => winningNumbers.includes(number));
  }

  #getRankIndex(playerNumbers, winningNumbers, bonusNumber) {
    const matchNumber = this.#getMatchNumber(playerNumbers, winningNumbers);

    if (matchNumber.length === MATCH_COUNT.FIRST_RANK) return INDEX.FIRST_RANK;
    if (matchNumber.length === MATCH_COUNT.SECOND_RANK && playerNumbers.includes(bonusNumber)) return INDEX.SECOND_RANK;
    if (matchNumber.length === MATCH_COUNT.THIRD_RANK && !playerNumbers.includes(bonusNumber)) return INDEX.THIRD_RANK;
    if (matchNumber.length === MATCH_COUNT.FORTH_RANK) return INDEX.FORTH_RANK;
    if (matchNumber.length === MATCH_COUNT.FIFTH_RANK) return INDEX.FIFTH_RANK;
  }

  getRankCountArray() {
    const rankCountArray = Array(NUMBER_OF_RANKS).fill(0);

    const winningNumbers = this.#winningLotto.numbers;
    const bonusNumber = this.#winningLotto.bonusNumber;
    this.#playerLottos.forEach((lotto) => {
      const rankIndex = this.#getRankIndex(lotto.numbers, winningNumbers, bonusNumber);
      rankCountArray[rankIndex]++;
    });

    return rankCountArray;
  }
}

module.exports = RankCalculator;
