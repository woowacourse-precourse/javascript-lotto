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
}

module.exports = Validator;
