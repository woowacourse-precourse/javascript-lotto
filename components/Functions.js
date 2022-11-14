const { Random, Console } = require('@woowacourse/mission-utils');
const { MATCH, RANK, PRIZE } = require('../constants/winning number');
const { MIN, MAX, PICK } = require('../constants/lotto number');
const { RESULT_MESSAGE, SYSTME_MESSAGE } = require('../constants/game message');
const {
  INIT,
  ONE,
  THREE,
  FIVE,
  THOUSAND,
} = require('../constants/basic number');

class Functions {
  static getLottoCount(money) {
    return money / THOUSAND;
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

  static printLottoToString(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(SYSTME_MESSAGE.COMMA)}]`);
    });
  }

  static getMatchCount(lottoNumber, winningNumber) {
    return lottoNumber.reduce(
      (count, num) => (winningNumber.includes(num) ? count + ONE : count),
      INIT
    );
  }

  static getRank(matchCount, includesBonus) {
    if (matchCount === MATCH.SIX) {
      return RANK.FIRST;
    }
    if (matchCount === MATCH.FIVE && includesBonus) {
      return RANK.SECOND;
    }
    if (matchCount === MATCH.FIVE) {
      return RANK.THIRD;
    }
    if (matchCount === MATCH.FOUR) {
      return RANK.FOURTH;
    }
    return matchCount === MATCH.THREE ? RANK.FIFTH : RANK.NONE;
  }

  static getWinningResult(lottos, winningNumber, bonusNumber) {
    const winningResult = Array.from({ length: FIVE }).fill(INIT);

    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto, winningNumber);
      const includesBonus = lotto.includes(bonusNumber);
      const rank = this.getRank(matchCount, includesBonus);

      if (rank !== RANK.NONE) {
        winningResult[rank] += ONE;
      }
    });
    return winningResult;
  }

  static calLottoYield(purchaseAmount, winningResult) {
    return (
      PRIZE.ARRAY.reduce(
        (acc, prize, index) => acc + prize * winningResult[index],
        INIT
      ) / purchaseAmount
    ).toFixed(THREE);
  }

  static printResult(winningResult, lottoYield) {
    const [firstCnt, secondCnt, thirdCnt, fourthCnt, fifthCnt] = winningResult;

    Console.print(RESULT_MESSAGE.WINNING_STATISTICS);
    Console.print(RESULT_MESSAGE.HYPHENS);
    Console.print(`${MATCH.THREE}개 일치 (${PRIZE.FIFTH}원) - ${fifthCnt}개`);
    Console.print(`${MATCH.FOUR}개 일치 (${PRIZE.FOURTH}원) - ${fourthCnt}개`);
    Console.print(`${MATCH.FIVE}개 일치 (${PRIZE.THIRD}원) - ${thirdCnt}개`);
    Console.print(
      `${MATCH.FIVE}개 일치, 보너스 볼 일치 (${PRIZE.SECOND}원) - ${secondCnt}개`
    );
    Console.print(`${MATCH.SIX}개 일치 (${PRIZE.FIRST}원) - ${firstCnt}개`);
    Console.print(RESULT_MESSAGE.YIELD(lottoYield));
  }
}

module.exports = Functions;
