const { MATCH_COUNT, INDEX, NUMBER_OF_RANKS } = require("../constatnts");

class RankCalculator {
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

  getRankCount(playerLottos, winningLotto) {
    const rankCount = Array(NUMBER_OF_RANKS).fill(0);

    playerLottos.forEach((lotto) => {
      const rankIndex = this.#getRankIndex(lotto.numbers, winningLotto.numbers, winningLotto.bonusNumber);
      rankCount[rankIndex]++;
    });

    return rankCount;
  }
}

module.exports = RankCalculator;
