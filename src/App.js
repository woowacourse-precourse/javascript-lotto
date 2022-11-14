const { Console, Random } = require('@woowacourse/mission-utils');
const { isValidateNumber, isAmountUnitOf1000, isZeroNumber } = require('./utils/validation.js');

class App {
  play() {
    this.buyLotto();
  }

  isValidatePurchaseAmount(purchaseAmount) {
    isValidateNumber(purchaseAmount);
    isAmountUnitOf1000(purchaseAmount);
    isZeroNumber(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.isValidatePurchaseAmount(purchaseAmount);
      this.calculatesUserBuyHowManyLotto(this.purchaseAmount);
    });
  }

  calculatesUserBuyHowManyLotto(purchaseAmount) {
    this.userBuyHowManyLotto = purchaseAmount / 1000;
  }

  generateLottoNumber() {
    const lottoNumber = this.createLottoNumber();
    const sortedLottoNumber = this.sortAscendingOrderLottoNumber(lottoNumber);
    return sortedLottoNumber;
  }
}

const app = new App();
app.play();

module.exports = App;
