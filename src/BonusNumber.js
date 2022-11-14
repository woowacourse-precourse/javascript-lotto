const BonusNumberConst = require("./constant/BonusNumberConst");

class BonusNumber {
  constructor(lotto, bonus) {
    this.userLotto = lotto;
    this.checkBonusNumberStartZero(bonus);
    this.checkOnlyNumber(bonus);

    const bonusTypeofNumber = Number(bonus);
    this.checkNumberRanges(bonusTypeofNumber);
    this.checkDuplicateWithWinningNumber(bonusTypeofNumber);
  }

  checkBonusNumberStartZero(bonus) {
    if (bonus[0] === "0") {
      throw new Error(BonusNumberConst.ERROR_DONT_START_ZERO);
    }
  }

  checkOnlyNumber(bonus) {
    const regex = /^\d+$/;

    if (!regex.test(bonus)) {
      throw new Error(BonusNumberConst.ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkNumberRanges(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error(BonusNumberConst.ERROR_OUT_OF_RANGE);
    }
  }

  checkDuplicateWithWinningNumber(bonus) {
    if (this.userLotto.includes(bonus)) {
      throw new Error(BonusNumberConst.ERROR_DUPLICATE_EXIST);
    }
  }
}

module.exports = BonusNumber;
