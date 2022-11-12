const Utils = require("./Utils");

class Validator {
  checkPurchaseAmount(input, lottoPrice) {
    input = Number(input);
    if (!Utils.isNumber(input)) return -1;
    if (input % lottoPrice === 0) {
      return input / lottoPrice;
    }
    return -1;
  }
  checkLottoNumber(number) {
    return Utils.isNumber(number) || (number >= 1 && number <= 45);
  }
}

module.exports = Validator;
