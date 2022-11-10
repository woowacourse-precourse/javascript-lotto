
const CONSTANT = require("../constant");

class LottoApp {
  lottos = [];
  constructor() {}

  static buyLottos(money) {
    //TO DO
    LottoApp.getLottoNumber(money / CONSTANT.LOTTO_PRICE);
  }

  static getLottoNumber(amount) {

  }
}
module.exports = LottoApp;
