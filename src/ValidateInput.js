const Utils = require("./Utils");

class ValidateInput {
  constructor() {
    this.utils = new Utils();
  }

  isValidLottoNumber = (number) => {
    return (
      Number(number) >= 1 &&
      Number(number) <= 45 &&
      Number(number) % 1 === 0 &&
      this.utils.isNumber(number)
    );
  }

  validateInputMoney(inputMoney) {
    return (!(
      this.utils.isBlank(inputMoney) ||
      !this.utils.isNumber(inputMoney) ||
      !this.utils.isThousandUnit(inputMoney)
    ));
  }

  validateWinningNumbers(winningNumbers) {
    return (!(
      ![...winningNumbers].every(this.isValidLottoNumber) ||
      [...(new Set(winningNumbers))].length !== 6
    ));
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    return (!(
      !this.isValidLottoNumber(bonusNumber) ||
      winningNumbers.includes(bonusNumber)
    ));
  }
}

module.exports = ValidateInput;
