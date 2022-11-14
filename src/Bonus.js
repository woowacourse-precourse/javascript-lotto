const { ERROR_MESSAGE } = require("./constant/Constant");

class Bonus {
  constructor(BonusNumber, lottoNumbers) {
    this.validate(Number(BonusNumber), lottoNumbers);
  }

  validate(bonusNumber, lottoNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_A_NUMBER);
    }
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER.IS_DUPLICATED);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER.NOT_IN_RANGE);
    }
  }
}

module.exports = Bonus;
