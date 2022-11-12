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

  isValidLottoArray(lottoArray) {
    return (
      lottoArray.length === 6 &&
      new Set(lottoArray).size === 6 &&
      lottoArray.toString() === lottoArray.sort((a, b) => a - b).toString()
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
    if (![...winningNumbers].every(this.isValidLottoNumber)) {
      this.utils.throwError("[ERROR] 입력하신 당첨 번호가 유효하지 않습니다. 다시 확인해주세요.")
    }

    return ([...(new Set(winningNumbers))].length !== 6) ?
      this.utils.throwError("[ERROR] 입력하신 당첨 번호가 유효하지 않습니다. 다시 확인해주세요.") : true;
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    return (
      !this.isValidLottoNumber(bonusNumber) ||
      winningNumbers.includes(bonusNumber)
    ) ?
      this.utils.throwError("[ERROR] 입력하신 보너스 번호가 유효하지 않습니다. 다시 확인해주세요.") : true;
  }
}

module.exports = ValidateInput;
