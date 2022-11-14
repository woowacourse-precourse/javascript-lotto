const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');
const {
  isValidateNumber,
  isAmountUnitOf1000,
  isZeroNumber,
  isLottoRange,
  isDuplicate,
} = require('./utils/validation.js');
const {
  generateLottoNumber,
  separateStringBySpecificCharacter,
  checkHowManyCorrect,
} = require('./utils/lottoGameHandler.js');

class App {
  constructor() {
    this.lottoResultMap = {
      '3개': 0,
      '4개': 0,
      '5개': 0,
      '5개+보너스': 0,
      '6개': 0,
    };
  }

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
      Console.print(`[${lotto.getLottoNumber().join(', ')}]`);
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

  isValidateBonusNumber(bonusNumber) {
    isValidateNumber(bonusNumber);
    isLottoRange(bonusNumber);
    if (this.winningNumber.includes(Number(bonusNumber)))
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
  }

  inputBonusNumberFromUser() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.isValidateBonusNumber(bonusNumber);
      this.judgePrize();
    });
  }

  judgePrize() {
    const lottoResultData = this.LottoNumberArray.map((lotto) =>
      checkHowManyCorrect(lotto, this.winningNumber, this.bonusNumber),
    );
    this.mappingResult(lottoResultData);
    this.calculateTotalPrizeMoney();
    this.printLottoGameResult();
  }

  mappingResult(lottoResultData) {
    lottoResultData.forEach((data) => {
      if (data.correctCount === 3) this.lottoResultMap['3개'] += 1;
      if (data.correctCount === 4) this.lottoResultMap['4개'] += 1;
      if (data.correctCount === 5 && data.bonusCount === 0) this.lottoResultMap['5개'] += 1;
      if (data.correctCount === 5 && data.bonusCount === 1) this.lottoResultMap['5개+보너스'] += 1;
      if (data.correctCount === 6) this.lottoResultMap['6개'] += 1;
    });
  }

  calculateTotalPrizeMoney() {
    this.totalPrizeMoney =
      5_000 * this.lottoResultMap['3개'] +
      50_000 * this.lottoResultMap['4개'] +
      1_500_000 * this.lottoResultMap['5개'] +
      30_000_000 * this.lottoResultMap['5개+보너스'] +
      2_000_000_000 * this.lottoResultMap['6개'];
  }

  printLottoGameResult() {
    Console.print(`당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${this.lottoResultMap['3개']}개`);
    Console.print(`4개 일치 (50,000원) - ${this.lottoResultMap['4개']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.lottoResultMap['5개']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.lottoResultMap['5개+보너스']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.lottoResultMap['6개']}개`);
    Console.print(`총 수익률은 ${this.calculateYield()}%입니다.`);
    Console.close();
  }

  calculateYield() {
    return ((this.totalPrizeMoney / this.purchaseAmount) * 100).toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
