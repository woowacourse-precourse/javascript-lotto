const { Random } = require('@woowacourse/mission-utils');

const { LOTTO, PRIZE_MONEY, PLACES_OF_DECIMALS } = require('./constants');

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

  static getMatchingNumCount(userNumbers, winningNumbers) {
    return userNumbers.filter((number) => winningNumbers.includes(number))
      .length;
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

  static stringToSortedNumberArray(string) {
    return string
      .split(',')
      .map((num) => Number(num))
      .sort((a, b) => a - b);
  }
}

module.exports = GameTools;
