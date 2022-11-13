const { Console, Random } = require('@woowacourse/mission-utils');
const { isValidateNumber, isAmountUnitOf1000, isZeroNumber } = require('./utils/validation.js');

class App {
  play() {
    this.salesLotto();
  }

  salesLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.isValidatePurchaseAmount(purchaseAmount);
      this.generateLottoNumber();
    });
  }

  isValidatePurchaseAmount(purchaseAmount) {
    isValidateNumber(purchaseAmount);
    isAmountUnitOf1000(purchaseAmount);
    isZeroNumber(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  createLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortAscendingOrderLottoNumber(lottoNumber) {
    return lottoNumber.sort((a, b) => a - b);
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
