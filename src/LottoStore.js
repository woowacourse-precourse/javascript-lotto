const { isValidMoneyNumberAmount } = require("../../backup/src/new/util/utils");

class LottoStore {
  validateMoney(input) {
    const money = Number(input);
    isValidMoneyNumberAmount(money);
  }
}

module.exports = LottoStore;
