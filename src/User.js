const LottoMarket = require("./LottoMarket");

class User {
  constructor() {
    this.money = null;
    this.lottoNums = null;
  }

  setUserMoney(money) {
    this.money = money;
  }

  buyLotto(lottoMarket) {
    this.lottoNums = lottoMarket.purchaseLotto(this.money);
  }
}

module.exports = User;
