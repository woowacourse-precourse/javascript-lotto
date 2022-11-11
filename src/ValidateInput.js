const Utils = require("./Utils");

class ValidateInput {
  constructor() {
    this.winningNumbers = '';
  }

  isValidLottoNumber(number) {
    const utils = new Utils;
    return (
      utils.isNumber(number) &&
      Number(number) >= 1 &&
      Number(number) <= 45 &&
      Number(number) % 1 === 0
    );
  }

  validateInputMoney(inputMoney) {
    const utils = new Utils();
    return (
      utils.isBlank(inputMoney) ||
      !utils.isNumber(inputMoney) ||
      !utils.isThousandUnit(inputMoney)
    ) ? utils.throwError("[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.")
      : true;
  }

  validateWinningNumbers(winningNumbers) {
    const utils = new Utils();
    const regExp = / /g;
    const winningNumbersArray = winningNumbers.replace(regExp, '').split(',');
    if (!winningNumbersArray.every(this.isValidLottoNumber)) {
      utils.throwError("[ERROR] 입력하신 당첨 번호가 유효하지 않습니다. 다시 확인해주세요.")
    }

    return ([...(new Set(winningNumbersArray))].length !== 6) ?
      utils.throwError("[ERROR] 입력하신 당첨 번호가 유효하지 않습니다. 다시 확인해주세요.") : true;
  }

  validateBonusNumber(bonusNumber) {
    const utils = new Utils();
    if (!this.isValidLottoNumber(bonusNumber)) {
      utils.throwError("[ERROR] 입력하신 보너스 번호가 유효하지 않습니다. 다시 확인해주세요.")
    }

    return ([...this.winningNumbers].includes(bonusNumber)) ?
      utils.throwError("[ERROR] 입력하신 보너스 번호가 유효하지 않습니다. 다시 확인해주세요.") : true;
  }
}

module.exports = ValidateInput;
