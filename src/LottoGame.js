const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constant');
const LottoShop = require('./LottoShop');

class LottoGame {
  constructor() {
    this.purchaseAmount;
    this.purchasedNumbers;
    this.winningNumbers;
    this.bonusNumber;
  }

  inputPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_AMOUNT, (amount) => {
      const lottoShop = new LottoShop(Number(amount));
      lottoShop.buyLotto(Number(amount));
      this.purchaseAmount = Number(amount);
      this.purchasedNumbers = lottoShop.getPurchasedNumbers();
      this.inputWinningNumber();
    });
  }
}
module.exports = LottoGame;
