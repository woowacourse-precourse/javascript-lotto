const { Random } = require('@woowacourse/mission-utils');

const {
  LOTTO,
  PRIZE_MONEY,
  PLACES_OF_DECIMALS,
  DELIMITER,
  RANK,
} = require('./constants');

class GameTools {
  static issueLottoAsManyAsCount(count) {
    const lottos = [];
    while (lottos.length < count) {
      const randomNumbers = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.LENGTH
      ).sort((a, b) => a - b);
      lottos.push(randomNumbers);
    }

    return lottos;
  }

  static stringToSortedNumberArray(string) {
    return string
      .split(DELIMITER)
      .map((num) => Number(num))
      .sort((a, b) => a - b);
  }

  static getMatchingNumCount(userNumbers, winningNumbers) {
    return userNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static getWinningRanking(matchingCount, matchesBonusNum) {
    if (matchingCount === LOTTO.LENGTH) return RANK.ONE;
    if (matchingCount + matchesBonusNum === LOTTO.LENGTH) return RANK.TWO;
    if (matchingCount === LOTTO.LENGTH - 1) return RANK.THREE;
    if (matchingCount === LOTTO.LENGTH - 2) return RANK.FOUR;
    if (matchingCount === LOTTO.LENGTH - 3) return RANK.FIVE;

    return -1;
  }

  static calcTotalPrize(winningState) {
    let totalPrizeMoney = 0;
    for (let i = 0; i < LOTTO.NUM_OF_PRIZE; i++) {
      totalPrizeMoney += winningState[i] * PRIZE_MONEY[i];
    }

    return totalPrizeMoney;
  }

  static calcRateOfReturn(totalPrize, countOfLottos) {
    const rateOfReturn = (totalPrize / (countOfLottos * LOTTO.PRICE)) * 100;

    return rateOfReturn.toFixed(PLACES_OF_DECIMALS);
  }
}

module.exports = GameTools;
