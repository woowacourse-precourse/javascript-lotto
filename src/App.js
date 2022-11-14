const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');
const { isValidateNumber, isAmountUnitOf1000, isZeroNumber } = require('./utils/validation.js');
const { generateLottoNumber } = require('./utils/lottoNumberGenerator.js');

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
      this.LottoNumberArray = Array.from({ length: this.userBuyHowManyLotto }, () => new Lotto(generateLottoNumber()));
      this.providesInformationPurchaseLotto();
    });
  }

  calculatesUserBuyHowManyLotto(purchaseAmount) {
    this.userBuyHowManyLotto = purchaseAmount / 1000;
  }

  providesInformationPurchaseLotto() {
    Console.print(`${this.userBuyHowManyLotto}개를 구매했습니다.`);
    this.LottoNumberArray.forEach((lotto) => {
      Console.print(lotto.getLottoNumber());
    });
  }
}

const app = new App();
app.play();

module.exports = App;
