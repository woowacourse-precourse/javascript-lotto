const { Random } = require('@woowacourse/mission-utils');

class GameTools {
  static issueLottoAsManyAsCount(count) {
    const lottoes = [];
    while (lottoes.length < count) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumbers.sort((a, b) => a - b);
      lottoes.push(randomNumbers);
    }

    return lottoes;
  }

  static getMatchingNumberCount(userNumbers, winningNumbers) {
    return userNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static calcRateOfReturn(prizeResult, lottoCount) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];
    const winningCount = Object.values(prizeResult);
    let totalPrizeMoney = 0;
    for (let i = 0; i < 5; i++) {
      totalPrizeMoney += winningCount[i] * prizeMoney[i];
    }
    const rateOfReturn = (totalPrizeMoney / (lottoCount * 1000)) * 100;

    return rateOfReturn.toFixed(1);
  }
}

module.exports = GameTools;
