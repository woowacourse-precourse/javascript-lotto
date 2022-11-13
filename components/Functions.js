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
    return inputNumber.split(',').map((num) => +num);
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

  static calLottoYield(purchaseAmount, winningResult) {
    return (
      PRIZE.ARRAY.reduce(
        (acc, prize, index) => acc + prize * winningResult[index],
        INIT
      ) / purchaseAmount.toFixed(FIRST_DIGIT)
    );
  }

  static printLottoResult(winningResult, lottoYield) {
    const [firstCount, secondCount, thirdCount, fourthCount, fifthCount] =
      winningResult;

    Console.print(MESSAGE.WINNING_STATISTICS);
    Console.print(MESSAGE.HYPHENS);
    Console.print(`${MATCH.THREE}개 일치 (${PRIZE.FIFTH}원) - ${fifthCount}개`);
    Console.print(
      `${MATCH.FOUR}개 일치 (${PRIZE.FOURTH}원) - ${fourthCount}개`
    );
    Console.print(`${MATCH.FIVE}개 일치 (${PRIZE.THIED}원) - ${thirdCount}개`);
    Console.print(
      `${MATCH.FIVE}개 일치, 보너스 볼 일치 (${PRIZE.SECOND}원) - ${secondCount}개`
    );
    Console.print(`${MATCH.SIX}개 일치 (${PRIZE.FIRST}원) - ${firstCount}개`);
    Console.print(MESSAGE.YIELD(lottoYield));
    Console.close();
  }
}

module.exports = Functions;
