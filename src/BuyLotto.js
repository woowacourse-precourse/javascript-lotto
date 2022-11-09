const MissionUtils = require('@woowacourse/mission-utils');
const { LOTTO, MESSAGE, ERROR } = require('./Constants');

class BuyLotto {
  getPurchaseAmount() {
    MissionUtils.Console.readLine(MESSAGE.PURCHASE_AMOUNT, (amount) => {
      const AMOUNT = Number(amount);
      if (AMOUNT % LOTTO.PRICE === 0) {
        return AMOUNT / LOTTO.PRICE;
      } else {
        throw new Error(ERROR.INCORRECT_AMOUNT);
      }
    });
  }
}

module.exports = BuyLotto;
