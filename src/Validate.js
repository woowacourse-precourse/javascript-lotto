const MESSAGE = require("./View/Message");
const CONSTANT = require("./constant");
const Utils = require("./domain/Utils");

class Validate {
  static money(money) {
    if (!money.endsWith(CONSTANT.TRIPLE_ZERO)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.VALID_MONEY}`);
    }
    if (+money < CONSTANT.LOTTO_PRICE) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.VALID_MONEY}`);
    }
    if (Number.isNaN(+money)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.VALID_MONEY}`);
    }
  }

  static isNumberValid(number) {
    if (+number < CONSTANT.LOTTO_START) {
      throw new Error(`${MESSAGE.ERROR.WIN_NUMBER}`);
    }
    if (+number > CONSTANT.LOTTO_END) {
      throw new Error(`${MESSAGE.ERROR.WIN_NUMBER}`);
    }
  }

  static selectWinNumber(numbers) {
    const winNumberArray = Utils.stringToArray(numbers);
    winNumberArray.forEach((number) => Validate.isNumberValid(number));

    const regExp = new RegExp(CONSTANT.REGEXP, "gm");
    if (!regExp.test(numbers)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.WIN_NUMBER}`);
    }
  }
}

module.exports = Validate;
