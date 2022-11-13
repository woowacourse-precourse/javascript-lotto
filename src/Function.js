const { ERROR_MESSAGE, INPUT_MONEY_UNIT } = require('./Constant');

class Function {
  static validateInputMoney(inputMoney) {
    if (inputMoney % INPUT_MONEY_UNIT)
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
  }

  static getLottoNumber(inputMoney) {
    return inputMoney / INPUT_MONEY_UNIT;
  }
}

module.export = Function;
