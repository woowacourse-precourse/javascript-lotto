const Validate = require("../Validate");

class LottoApp {
  static buyLottos(money) {
    Validate.money(money);
    // console.log("로또를 삽니다", money);
  }
}
module.exports = LottoApp;
