const {
  LOTTO_PRICE,
  INITIAL_STATICS,
  WINNING_PRICES,
  ERROR_MESSAGES,
  ADD_COMMA_EXP,
} = require("../utils/constants");
const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #winningNums;

  constructor(winningNums) {
    this.validateWinningNubmer(winningNums);
    this.#winningNums = winningNums.map((num) => +num);
  }

  calculateStatics(issuedLottos, bonusNumber) {
    const statics = Object.assign({}, INITIAL_STATICS);

    issuedLottos.forEach((lotto) => {
      let sameCount = 0;

      lotto.forEach((num, index) => {
        this.#winningNums.includes(num) && sameCount++;

        if (index + 1 === lotto.length) {
          if (sameCount === 5 && lotto.includes(bonusNumber)) {
            statics["5andBonus"] += 1;
          } else {
            sameCount in statics && (statics[sameCount] += 1);
          }
        }
      });
    });

    this.calculateEarningsRate(statics, issuedLottos.length);
  }

  calculateEarningsRate(statics, purchase) {
    const matchedCounts = Object.keys(statics);
    let total = 0;

    const addWinningPrice = (matchedCount) =>
      statics[matchedCount] !== 0 &&
      (total += WINNING_PRICES[matchedCount] * statics[matchedCount]);

    matchedCounts.forEach((matchedCount) => addWinningPrice(matchedCount));

    const earnings = (total / (purchase * LOTTO_PRICE)) * 100;

    this.printResults(statics, this.convertRate(earnings));
  }

  convertRate(earnings) {
    const earningsRate =
      (+(Math.round(earnings + "e+1") + "e-1"))
        .toFixed(1)
        .replace(ADD_COMMA_EXP, ",") + "%";

    return earningsRate;
  }

  printResults(statics, earningsRate) {
    const resultMessage = `
당첨 통계
---
3개 일치 (5,000원) - ${statics[3]}개
4개 일치 (50,000원) - ${statics[4]}개
5개 일치 (1,500,000원) - ${statics[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${statics["5andBonus"]}개
6개 일치 (2,000,000,000원) - ${statics[6]}개
총 수익률은 ${earningsRate}입니다.
`;

    Console.print(resultMessage);
    Console.close();
  }

  validateWinningNubmer(winningNums) {
    const { WINNING_NUMS } = ERROR_MESSAGES;

    if (winningNums.length !== 6) throw new Error(WINNING_NUMS);

    winningNums.some((num) => {
      if (
        typeof +num !== "number" ||
        Number.isNaN(+num) ||
        +num < 1 ||
        +num > 45
      )
        throw new Error(WINNING_NUMS);
    });

    if (winningNums.length !== new Set(winningNums).size)
      throw new Error(WINNING_NUMS);
  }

  validateBonusNumber(bonusNumber) {
    const { BOUNS_NUM } = ERROR_MESSAGES;

    if (
      typeof bonusNumber !== "number" ||
      Number.isNaN(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45
    )
      throw new Error(BOUNS_NUM);

    if (this.#winningNums.some((num) => num === bonusNumber))
      throw new Error(BOUNS_NUM);
  }
}

module.exports = Lotto;
