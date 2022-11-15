const ErrorCheck = require('../components/ErrorCheck');
const { Random, Console } = require('@woowacourse/mission-utils');
const { MATCH, RANK, PRIZE } = require('../constants/winning number');
const { MIN, MAX, PICK } = require('../constants/lotto number');
const { RESULT_MESSAGE, SYSTEM_MESSAGE } = require('../constants/game message');
const {
  INIT,
  ONE,
  THREE,
  FIVE,
  THOUSAND,
} = require('../constants/basic number');

class Lotto {
  #numbers;

  constructor(numbers) {
    ErrorCheck.winningNumber(numbers);
    this.#numbers = numbers;
  }

  static getCount(money) {
    return money / THOUSAND;
  }

  static generate(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(MIN, MAX, PICK).sort(
        (numA, numB) => numA - numB
      )
    );
  }

  static digitize(inputNumber) {
    return inputNumber.split(SYSTEM_MESSAGE.COMMA).map((num) => Number(num));
  }

  static printToString(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(SYSTEM_MESSAGE.COMMA_WITH_SPACE)}]`);
    });
  }

  getMatchCount(lottoNumber) {
    return lottoNumber.reduce(
      (count, num) => (this.#numbers.includes(num) ? count + ONE : count),
      INIT
    );
  }

  getRank(matchCount, includesBonus) {
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

  getWinningResult(lottos, bonusNumber) {
    const winningResult = Array.from({ length: FIVE }).fill(INIT);

    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto, this.#numbers);
      const includesBonus = lotto.includes(bonusNumber);
      const rank = this.getRank(matchCount, includesBonus);

      if (rank !== RANK.NONE) {
        winningResult[rank] += ONE;
      }
    });
    return winningResult;
  }

  static calYield(purchaseAmount, winningResult) {
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

module.exports = Lotto;
