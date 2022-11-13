const { ERROR_MESSAGE, INPUT_MONEY_UNIT } = require('./Constant');

class Function {
  static validateInputMoney(inputMoney) {
    if (Number(inputMoney) % INPUT_MONEY_UNIT) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }

  static getLottoNumber(inputMoney) {
    return Number(inputMoney) / INPUT_MONEY_UNIT;
  }
}

module.exports = Function;
