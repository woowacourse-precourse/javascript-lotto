const { isValidMoneyNumberAmount } = require("../../backup/src/new/util/utils");

class LottoStore {
  askBuyLottoCount(money) {
    this.validateMoney(money);
    return money / 1000;
  }

  validateMoney(input) {
    const money = Number(input);
    isValidMoneyNumberAmount(money);
  }
}

module.exports = LottoStore;
