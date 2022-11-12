const MESSAGE = require("../assets/Message");
const CONSTANT = require("../assets/constant");
const Utils = require("../assets/Utils");

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
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.WIN_NUMBER}`);
    }
    if (+number > CONSTANT.LOTTO_END) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.WIN_NUMBER}`);
    }
  }

  static isDuplicated(numberArray) {
    return numberArray.length !== [...new Set(numberArray)].length;
  }

  static lottoNumber(lottoNumber) {
    lottoNumber.forEach((number) => Validate.isNumberValid(number));

    if (Validate.isDuplicated(lottoNumber)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.LOTTO_NUMBER}`);
    }
    if (lottoNumber.length !== CONSTANT.LOTTO_LENGTH) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.LOTTO_LENGTH}`);
    }
  }

  static selectWinNumber(numbers) {
    const winNumberArray = Utils.stringToArray(numbers);
    winNumberArray.forEach((number) => Validate.isNumberValid(number));

    const regExp = new RegExp(CONSTANT.REGEXP, "gm");
    if (!regExp.test(numbers)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.WIN_NUMBER}`);
    }

    if (Validate.isDuplicated(winNumberArray)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.LOTTO_NUMBER}`);
    }
  }

  static bonuseNumber(bonuse, winNumber) {
    Validate.isNumberValid(bonuse);
    if (!Number.isInteger(+bonuse)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.BONUSE_NUMBER}`);
    }

    if (Utils.stringToArray(winNumber).includes(+bonuse)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.BONUSE_NUMBER}`);
    }
  }
}

module.exports = Validate;
