const { ERROR_MESSAGE } = require('./Constant');

const INPUT_MONEY_UNIT = 1000;

class Function {
  static validateInputMoney(inputMoney) {
    if (inputMoney % INPUT_MONEY_UNIT)
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
  }
}

module.export = Function;
