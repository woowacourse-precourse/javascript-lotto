const { ERROR_MESSAGE } = require("./message");

class Validation {
  static validLottoNumber(lottoNumbers) {
    if (lottoNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NOT_SIX);
    }
    if (new Set(lottoNumbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.DATA_DUPLICATION);
    }
  }

  static validPurchase(purchase) {
    if (isNaN(purchase)) {
      throw new Error(ERROR_MESSAGE.STRING_INCLUDE);
    }
    const result = parseInt(purchase, 10) % 1000;
    if (result !== 0) {
      throw new Error(ERROR_MESSAGE.MONNEY_UNIT);
    }
  }

  static validWinning(inputNumber) {
    const splitInputNumber = inputNumber.split(",");
    if (!splitInputNumber.every((num) => !isNaN(num))) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (splitInputNumber.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NOT_SIX);
    }
    if (new Set(splitInputNumber).size !== 6) {
      throw new Error(ERROR_MESSAGE.DATA_DUPLICATION);
    }
  }

  static validBonus(BonusNumber) {
    if (isNaN(BonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }

  static validWinningAndBonus(data) {
    if (new Set(data.toString().split(",")).size !== 7) {
      throw new Error(ERROR_MESSAGE.DATA_DUPLICATION);
    }
  }
}
module.exports = Validation;
