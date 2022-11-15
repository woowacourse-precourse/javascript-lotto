const Constant = require("../Constant");
class Validate {
  static validateMoney(lottoPurchaseAmount) {
    if (isNaN(lottoPurchaseAmount)) {
      throw new Error(Constant.INPUT_ONLY_NUMBER);
    }
    if (lottoPurchaseAmount < Constant.MINIMUM_AMOUNT) {
      throw new Error(Constant.INPUT_OVER_1000);
    }
    if (lottoPurchaseAmount % Constant.MINIMUM_AMOUNT !== 0) {
      throw new Error(Constant.INPUT_SHOULD_DIVIDED_1000);
    }
    return true;
  }

  static validateUserInputLottoNumbers(userInputLottoNumbers) {
    const hasComma = userInputLottoNumbers.includes(",");
    const arrUserInputLottoNumbers = userInputLottoNumbers
      .split(",")
      .map((number) => +number ?? NaN);
    const isAllNumber = arrUserInputLottoNumbers.every(
      (number) => !isNaN(number)
    );

    if (!hasComma) {
      throw new Error(Constant.INPUT_NUMBER_BETWEEN_COMMA);
    }
    if (!isAllNumber) {
      throw new Error(Constant.INPUT_ONLY_NUMBER);
    }
    return true;
  }

  static validateBonusNumber(arrUserNumberInput, bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(Constant.INPUT_ONLY_NUMBER);
    }
    if ((!isNaN(bonusNumber) && bonusNumber < 1) || bonusNumber > 45) {
      throw new Error(Constant.INPUT_ONLY_1_TO_45);
    }
    if (arrUserNumberInput.includes(bonusNumber)) {
      throw new Error(Constant.DUPLICATE_WITH_LOTTO_NUMBERS);
    }
    return true;
  }
}

module.exports = Validate;
