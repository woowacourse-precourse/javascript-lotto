const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');
const {
  isValidateNumber,
  isAmountUnitOf1000,
  isZeroNumber,
  isLottoRange,
  isDuplicate,
} = require('./utils/validation.js');
const { generateLottoNumber, separateStringBySpecificCharacter } = require('./utils/lottoGameHandler.js');

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
      this.printInformationPurchasedLotto();
      this.inputWinningNumberFromUser();
    });
  }

  calculatesUserBuyHowManyLotto(purchaseAmount) {
    this.userBuyHowManyLotto = purchaseAmount / 1000;
  }

  printInformationPurchasedLotto() {
    Console.print(`${this.userBuyHowManyLotto}개를 구매했습니다.`);
    this.LottoNumberArray.forEach((lotto) => {
      Console.print(lotto.getLottoNumber());
    });
  }

  isValidateWinningNumber(winningNumber) {
    winningNumber.forEach((number) => {
      isValidateNumber(number);
      isLottoRange(number);
    });
    isDuplicate(winningNumber);
    this.winningNumber = winningNumber.map(Number);
  }

  inputWinningNumberFromUser() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.isValidateWinningNumber(separateStringBySpecificCharacter(winningNumber, ','));
      this.inputBonusNumberFromUser();
    });
  }

  inputBonusNumberFromUser() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNumber) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
