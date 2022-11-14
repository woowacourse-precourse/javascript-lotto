const {
  LOTTO_PRICE,
  INITIAL_STATICS,
  WINNING_PRICES,
  ERROR_MESSAGES,
  ADD_COMMA_EXP,
} = require("../utils/constants");
const { validateType } = require("../utils/functions");

class Lotto {
  #winningNums;

  constructor(winningNums) {
    this.validateWinningNubmer(winningNums);

    this.#winningNums = winningNums.map((num) => +num);
    this.statics = Object.assign({}, INITIAL_STATICS);
    this.totalPrice = 0;
  }

  calculateStatics(issuedLottos, bonusNumber) {
    issuedLottos.forEach((lotto) => {
      let sameCount = 0;

      lotto.forEach((num, index) => {
        this.#winningNums.includes(num) && (sameCount += 1);

        if (index + 1 === lotto.length)
          this.updateStatics(sameCount, lotto.includes(bonusNumber));
      });
    });

    const earningsRate = this.calculateEarningsRate(issuedLottos.length);

    return { statics: this.statics, earningsRate };
  }

  updateStatics(sameCount, isMatchBonusNum) {
    if (sameCount === 5 && isMatchBonusNum) {
      this.statics["5andBonus"] += 1;
    } else if (sameCount in this.statics) {
      this.statics[sameCount] += 1;
    }
  }

  calculateEarningsRate(purchase) {
    const matchedCounts = Object.keys(this.statics);

    matchedCounts.forEach((matchedCount) => this.addWinningPrice(matchedCount));

    const earnings = (this.totalPrice / (purchase * LOTTO_PRICE)) * 100;

    return this.convertRate(earnings);
  }

  addWinningPrice = (matchedCount) => {
    this.statics[matchedCount] !== 0 &&
      (this.totalPrice +=
        WINNING_PRICES[matchedCount] * this.statics[matchedCount]);
  };

  convertRate(earnings) {
    const earningsRate =
      (+(Math.round(earnings + "e+1") + "e-1"))
        .toFixed(1)
        .replace(ADD_COMMA_EXP, ",") + "%";

    return earningsRate;
  }

  validateWinningNubmer(winningNums) {
    const { WINNING_NUMS } = ERROR_MESSAGES;

    winningNums.forEach((num) => validateType(num, WINNING_NUMS));

    if (
      winningNums.length !== 6 ||
      winningNums.length !== new Set(winningNums).size
    )
      throw new Error(WINNING_NUMS);
  }

  validateBonusNumber(bonusNumber) {
    const { BOUNS_NUM } = ERROR_MESSAGES;

    validateType(bonusNumber, BOUNS_NUM);

    if (this.#winningNums.includes(bonusNumber)) throw new Error(BOUNS_NUM);
  }
}

module.exports = Lotto;
