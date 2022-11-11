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
}

module.exports = GameTools;
