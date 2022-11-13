const { Random, Console } = require('@woowacourse/mission-utils');
const { INIT, FIVE, ONE } = require('../constants/basic number');
const { MATCH, RANK, PRIZE } = require('../constants/winning number');
const { DIVIDER } = require('../constants/basic number');
const { MIN, MAX, PICK } = require('../constants/lotto number');
const MESSAGE = require('../constants/message');

class Functions {
  static getLottoCount(money) {
    return money / DIVIDER;
  }

  static generateLottos(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(MIN, MAX, PICK).sort(
        (numA, numB) => numA - numB
      )
    );
  }

  static digitize(inputNumber) {
    return new Set(inputNumber.split(',').map((num) => +num));
  }

  static getMatchCount(lottoNumber, winningNumber) {
    return lottoNumber.reduce(
      (count, num) => (winningNumber.has(num) ? count + ONE : count),
      INIT
    );
  }

  static getRankIndex(matchCount, includesBonus) {
    if (matchCount === MATCH.SIX) {
      return RANK.FIRST;
    }
    if (matchCount === MATCH.FIVE && includesBonus) {
      return RANK.SECOND;
    }
    if (matchCount === MATCH.FIVE) {
      return RANK.THIRD;
    }
    return matchCount === MATCH.FOURTH ? RANK.FOURTH : RANK.FIFTH;
  }

  static getWinningResult(lottos, winningNumber, bonusNumber) {
    const winningResult = Array.from({ length: FIVE }).fill(INIT);

    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto, winningNumber);
      const includesBonus = lotto.includes(bonusNumber);
      const rank = this.getRankIndex(matchCount, includesBonus);
      winningResult[rank] += ONE;
    });
    return winningResult;
  }
}

module.exports = Functions;

// Update
