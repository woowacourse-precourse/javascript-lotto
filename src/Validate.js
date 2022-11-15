const { CONSTANTS } = require("./constant/constants");
const {
  AMOUNT_ERROR_MESSAGE,
  LOTTO_NUM_ERROR_MESSAGE,
} = require("./constant/message");

class Validate {
  countLotto(amount) {
    return amount / CONSTANTS.LOTTO_PRICE;
  }
  validateAmount(amount) {
    if (amount <= 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.NOT_PLUS_INPUT);
    }
    if (amount % 1000 !== 0) {
      throw new Error(AMOUNT_ERROR_MESSAGE.NOT_RIGHT_UNIT);
    }
    if (amount === "") {
      throw new Error(AMOUNT_ERROR_MESSAGE.REQUIRE_INPUT);
    }
    if (amount.includes(" ")) {
      throw new Error(AMOUNT_ERROR_MESSAGE.INCLUDED_SPACE);
    }
  }

  lottoNumberRange(element) {
    return (
      CONSTANTS.LOTTO_MINIMUM_NUMBER <= element &&
      CONSTANTS.LOTTO_MAXIMUM_NUMBER >= element
    );
  }
  isValidRange(bonusNum) {
    return this.lottoNumberRange(bonusNum);
  }
  isDuplicatedWinNumber(bonusNum, winNumber) {
    return winNumber.includes(Number(bonusNum));
  }
  validateBonusNumber(bonusNum, winNumber) {
    if (!this.isValidRange(bonusNum)) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (this.isDuplicatedWinNumber(bonusNum, winNumber)) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.DUPLICATED_WITH_WIN_NUMBER);
    }
  }
}

module.exports = Validate;
